// MyLocalDressmaker.jsx
import React from 'react';
import VideoContentCreationMLD from './VideoContentCreationMLD';
import Image from 'next/image';

const MyLocalDressmaker = () => {
  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold mb-4">My Local Dressmaker Project</h2>
      <p className="text-base mb-4">
        Delving into my thought processes, one noteworthy project was with a
        black owned SME of Aqua Ofosuene, on her e-commerce platform site called
        mylocaldressmaker. This was my first freelance mission and it saw me not
        only be the Lead UX UI Designer & Researcher, but also a content creator
        and strategic business analyst. Facing a site lacking priorities,
        categorization, and clear organization. I enjoyed collaborating closely
        with the owner to assist her in clarifying her dreams and aligning them
        with her business goals, demonstrating this on her online website and
        across social media platforms. Together, we unraveled a perplexing
        navigation flow, defining clear business goals. This collaboration
        resulted in a strategic separation of concerns, prioritized navigation,
        and a streamlined content hierarchy. Although
        "www.mylocaldressmaker.com" is no longer online, you can explore
        snapshots of its past below and on web.archive.org. Aqua Ofosuene is
        very happy to be contacted as a reference.
      </p>
      <div className="mb-4">
        {/* Two stacked videos */}
        <VideoContentCreationMLD />
        <VideoContentCreationMLD />
      </div>
      <div>
        {/* Images */}
        <Image
          src="/images/TheBrixtonCod.png"
          alt="Image 1"
          width={1920}
          height={1080}
        />
        <Image
          src="/images/TheBrixtonCod.png"
          alt="Image 2"
          width={1920}
          height={1080}
        />
      </div>
    </div>
  );
};

export default MyLocalDressmaker;
