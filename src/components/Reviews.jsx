import React from 'react';

import styled from '@emotion/styled';

const ReviewList = styled.ul({
  marginTop: '1em',
  padding: '.4em 0',
  listStyle: 'none',
});

const ReviewItem = styled.li({
  display: 'flex',
  '& div': {
    padding: '.4em 1em',
    color: '#333',
    textDecoration: 'none',
    cursor: 'pointer',
  },
});


function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <ReviewList>
      {sortedReviews.map((review) => (
        <ReviewItem key={review.id}>
          <div>
            {review.name}
          </div>
          <div>
            {review.score}
            점
          </div>
          <div>
            {review.description}
          </div>
        </ReviewItem>
      ))}
    </ReviewList>
  );
}

export default React.memo(Reviews);
