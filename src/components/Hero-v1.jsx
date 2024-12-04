export default function Hero({ heading, subheading, backgroundImage, buttonText, buttonLink }) {
    return (
      <section
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '50px 20px',
          color: '#000',
          textAlign: 'left',
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
                backgroundColor: '#fffef5',
                color: '#885fff',
                textDecoration: 'none',
                borderRadius: '100px',
                border: '1px solid #885fff',
                textTransform: 'uppercase',
              }}
            >
              {buttonText}
            </a>
          )}
        </div>
      </section>
    );
  }
  