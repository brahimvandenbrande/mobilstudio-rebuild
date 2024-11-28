import Hero from '../../components/Hero';
import TextImage from '../../components/TextImage';

const BlockComponents = {
  hero: Hero,
  'text-image': TextImage,
};

export default async function HomePage() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/pages?where[slug][equals]=home`);
    const data = await res.json();
    console.log('API Response:', data);

    const homePage = data.docs[0];
    console.log('HomePage data:', homePage);

    if (!homePage) {
      return <div className="container">No home page found. Please create a page with slug "home".</div>;
    }

    if (!homePage.blocks || homePage.blocks.length === 0) {
      return <div className="container">Home page found but no blocks available.</div>;
    }

    return (
      <div className="content">
        {homePage.blocks.map((block, index) => {
          const BlockComponent = BlockComponents[block.blockType];
          
          if (!BlockComponent) {
            console.warn(`Block type ${block.blockType} not found`);
            return null;
          }

          return <BlockComponent key={index} {...block} />;
        })}
      </div>
    );
  } catch (error) {
    console.error('Error fetching home page:', error);
    return <div className="container">Error loading page: {error.message}</div>;
  }
}