"use client";

import { useState } from 'react';
import { FaUser, FaEnvelope, FaComment, FaPaperPlane } from 'react-icons/fa';

const ContactSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessages, setErrorMessages] = useState<{ name?: string, email?: string, message?: string }>({});


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('loading');
        setErrorMessages({});

      // 入力バリデーション
        let hasError = false;
        const newErrorMessages: { name?: string, email?: string, message?: string } = {};
        if (!name.trim()) {
            newErrorMessages.name = 'お名前を入力してください。';
            hasError = true;
        }
        if (!email.trim()) {
            newErrorMessages.email = 'メールアドレスを入力してください。';
            hasError = true;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrorMessages.email = '有効なメールアドレスを入力してください。';
            hasError = true;
        }
        if (!message.trim()) {
            newErrorMessages.message = 'メッセージを入力してください。';
            hasError = true;
        }

        if (hasError) {
            setErrorMessages(newErrorMessages);
            setFormStatus('error');
            return;
        }
      // 送信処理
        try {
            const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
            });

             if (response.ok) {
              setFormStatus('success');
                  setName('');
                    setEmail('');
                    setMessage('');
             } else {
                 const errorData = await response.json();
               console.error("送信エラー",errorData);
                 setFormStatus('error');
             }

        } catch (error) {
            console.error("通信エラー",error);
             setFormStatus('error');
        }

    };


    return (
      <section className="py-16">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">お問い合わせ</h2>
          <p className="text-black text-center mb-8">
            ご質問やご依頼など、お気軽にご連絡ください。
          </p>
          <div className="flex justify-center px-4 sm:px-8 md:px-12 lg:px-20">
              <form className="w-full max-w-2xl" onSubmit={handleSubmit}>
          <div className="mb-4 relative">
             <label htmlFor="name" className="block text-black text-sm font-bold mb-2">
               お名前
                </label>
              <div className="relative">
                   <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                       <FaUser className="text-gray-400" />
                  </div>
                 <input
                    type="text"
                    id="name"
                     value={name}
                      onChange={(e) => setName(e.target.value)}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-10 ${errorMessages.name ? 'border-red-500' : ''}`}
                    />
              </div>
                {errorMessages.name && <p className="text-red-500 text-sm mt-1">{errorMessages.name}</p>}
              </div>
            <div className="mb-4 relative">
                <label htmlFor="email" className="block text-black text-sm font-bold mb-2">
                    メールアドレス
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaEnvelope className="text-gray-400" />
                    </div>
                    <input
                        type="email"
                        id="email"
                         value={email}
                       onChange={(e) => setEmail(e.target.value)}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-10 ${errorMessages.email ? 'border-red-500' : ''}`}
                    />
                </div>
                {errorMessages.email && <p className="text-red-500 text-sm mt-1">{errorMessages.email}</p>}
            </div>
            <div className="mb-4 relative">
              <label
                htmlFor="message"
                className="block text-black text-sm font-bold mb-2"
              >
                メッセージ
              </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaComment className="text-gray-400" />
                    </div>
                    <textarea
                      id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                         rows={5}
                       className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-10 min-h-[100px] ${errorMessages.message ? 'border-red-500' : ''}`}
                    />
                 </div>
                 {errorMessages.message && <p className="text-red-500 text-sm mt-1">{errorMessages.message}</p>}
            </div>
            <button
                 type="submit"
                className={`relative bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-300 flex items-center justify-center ${formStatus === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
               disabled={formStatus === 'loading'}
            >
               {formStatus === 'loading' ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white" style={{borderLeftColor: 'transparent', borderRightColor: 'transparent'}} />
                        ) : (
                        <>
                            送信
                             <FaPaperPlane className="ml-2" />
                       </>
                       )}
          </button>
            {formStatus === 'success' && (
               <p className="text-green-500 text-sm mt-2 text-center">送信が完了しました。</p>
              )}
               {formStatus === 'error' && (
                <p className="text-red-500 text-sm mt-2 text-center">送信に失敗しました。入力内容を確認してください。</p>
                )}
          </form>
          </div>
        </div>
      </section>
    );
  };
  export default ContactSection;