import React from 'react';
import Image from 'next/image';

const BlogSingle = ({ title, content,  imageUrl, imageAlt, quoteText, quoteAuthor }) => {

  return (
    <>
      <style>
        {`
          .single_post_two img {
            height: auto;
          }
        `}
      </style>

      <div className="blog_single_info">
        <div className="blog_single_item">
          <div className="single_post_two">
            <h2>{title}</h2>
            <p dangerouslySetInnerHTML={{ __html: content }} />
            {imageUrl && (
              <Image src={imageUrl} alt={imageAlt || 'Post Image'} width={800} height={400} />
            )}

            {/* {quoteText && (
              <blockquote>
                <h4 className="c_head">{quoteText}</h4>
                {quoteAuthor && <div className="author">{quoteAuthor}</div>}
              </blockquote>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSingle;