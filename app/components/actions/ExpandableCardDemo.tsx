import { ProjectStatusCard } from "@/components/ui/expandable-card"

function ExpandableCardDemo() {
  return (
  <div className="grid gap-4 md:grid-cols-2">
  <ProjectStatusCard
  title="デザインシステム"
  progress={100}
  dueDate="2023年12月31日"
  contributors={[
  { name: "エマ" },
  { name: "ジョン" },
  { name: "リサ" },
  { name: "デイビッド" }
  ]}
  tasks={[
  { title: "コンポーネントライブラリの作成", completed: true },
  { title: "デザイントークンの実装", completed: true },
  { title: "スタイルガイドの作成", completed: true },
  { title: "ドキュメントのセットアップ", completed: true }
  ]}
  githubStars={256}
  openIssues={0}
  />

<ProjectStatusCard
    title="アナリティクスダッシュボード"
    progress={45}
    dueDate="2024年3月1日"
    contributors={[
      { name: "マイケル" },
      { name: "ソフィー" },
      { name: "ジェームズ" }
    ]}
    tasks={[
      { title: "ダッシュボードのレイアウト設計", completed: true },
      { title: "データ取得の実装", completed: true },
      { title: "可視化コンポーネントの作成", completed: false },
      { title: "エクスポート機能の追加", completed: false },
      { title: "ユーザーテスト", completed: false }
    ]}
    githubStars={89}
    openIssues={8}
  />
</div>
  )
}

export { ExpandableCardDemo };
