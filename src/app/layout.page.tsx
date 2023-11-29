export default function Layout(props: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        {props.children}
      </body>
    </html>
  )
}
