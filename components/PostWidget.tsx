import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../utils/utils';
import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = ({ categories, slug }: any) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {relatedPosts.map(({title, featuredImage, createdAt, slug}, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              loader={grpahCMSImageLoader}
              alt={title}
              height="60px"
              width="60px"
              unoptimized
              className="align-middle rounded-full"
              src={featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">{moment(createdAt).format('MMM DD, YYYY')}</p>
            <Link href={`/post/${slug}`} className="text-md" key={index}>{title}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;