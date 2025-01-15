import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    console.log('API Route が実行されました');
    try {
         console.log('SMTP_HOST:',process.env.SMTP_HOST);
         console.log('SMTP_PORT:',process.env.SMTP_PORT);
         console.log('SMTP_SECURE:',process.env.SMTP_SECURE);
          console.log('SMTP_USER:',process.env.SMTP_USER);
          console.log('SMTP_PASSWORD:',process.env.SMTP_PASSWORD);


        const { name, email, message } = await req.json();


        if (!name || !email || !message) {
            return NextResponse.json({ message: '必須項目を入力してください。' }, {status: 400});
        }


        // Nodemailerの設定
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.example.com',
            port: parseInt(process.env.SMTP_PORT || '587', 10),
            secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : false,
            auth: {
               user: process.env.SMTP_USER,
               pass: process.env.SMTP_PASSWORD,
           },
        });


     // 送信するメールの内容
        console.log('メール送信処理開始');
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.SMTP_USER,
          subject: '【お問い合わせ】ホームページからのお問い合わせ',
          text: `お名前: ${name}\nメールアドレス: ${email}\nメッセージ: ${message}`,
      });
        console.log('メール送信処理完了');
        return NextResponse.json({ message: 'メールが送信されました。' }, {status: 200});
   } catch (error:unknown) {
           console.error("メール送信エラー:", error);
          console.log('キャッチされたエラー:',error);
           let message = "メール送信に失敗しました";

          if(error instanceof Error){
            message = error.message;
         }
           return NextResponse.json({ message: message, error: message }, {status: 500});
         //  エラーメッセージをJSON形式で返すように修正
      }
   }