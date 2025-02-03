```javascript
// app/layout.js

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
// app/page.js
export default function Page() {
  return <div>Main page content</div>;
}

// app/about/page.js
export default function AboutPage() {
  return <div>About page content</div>;
}
```