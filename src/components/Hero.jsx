export default function Hero({ heading, subheading, backgroundImage, buttonText, buttonLink }) {
    return (
      <section
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '50px 20px',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1>{heading}</h1>
          {subheading && <p>{subheading}</p>}
          {buttonText && buttonLink && (
            <a
              href={buttonLink}
              style={{
                display: 'inline-block',
                marginTop: '20px',
                padding: '10px 20px',
                backgroundColor: '#0070f3',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '5px',
              }}
            >
              {buttonText}
            </a>
          )}
        </div>
      </section>
    );
  }
  