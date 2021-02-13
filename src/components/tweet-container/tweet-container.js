import React from 'react'
import { Helmet } from 'react-helmet';

export const TweetContainer = ({ innerHTML }) => (
  <>
    <Helmet>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>
    </Helmet>
    <blockquote className="twitter-tweet">{innerHTML}</blockquote>
  </>
);
