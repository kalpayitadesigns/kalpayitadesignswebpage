import React from 'react'
import './style.css'

// Social media links
const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/kalpayitadesigns',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/kalpayitadesigns',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/kalpayitadesigns/',
  },
  {
    name: 'Pinterest',
    url: 'https://www.pinterest.com/kalpayitadesigns/',
  },
]

// Replace these filenames with your actual image files stored in /public
const designs = [
  {
    title: 'Minimalist Art Tee',
    imgSrc: 'design1.png', // matches public/design1.png
    alt: 'Minimalist Art Tee',
  },
  {
    title: 'Abstract Splash',
    imgSrc: 'design2.png',
    alt: 'Abstract Splash',
  },
  {
    title: 'Inspire Daily',
    imgSrc: 'design3.png',
    alt: 'Inspire Daily',
  },
  // Add more designs here as needed
]

function App() {
  return (
    <div className="App">
      <header>
        <h1>Kalpayita Designs</h1>
        <p className="tagline">Express yourself</p>
        <nav>
          {socialLinks.map(({ name, url }) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="showcase">
          <h2>Featured Designs</h2>
          <div className="design-grid">
            {designs.map(({ title, imgSrc, alt }) => (
              <div key={title} className="design-card">
                <img src={imgSrc} alt={alt} />
                <p>{title}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about">
          <h2>About Kalpayita Designs</h2>
          <p>
            Kalpayita Designs specializes in custom-printed shirts and t-shirts, bringing innovative student creativity to wearable art. Started by a passionate entrepreneur balancing college and business, our goal is to offer unique prints, top quality, and personalized style for every customer.
          <p>DM for collaborations or custom orders!</p>
          </p>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Kalpayita Designs. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
