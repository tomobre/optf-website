import { ReactElement } from 'react';
import classNames from 'classnames';

import { IPost } from '@/types/cms';
import { generateRoute } from '@/services/cms';
import Container from '@/components/Container';
import { Headline } from '@/components/ui';
import { PostCardNew } from '@/components/cards';
import { UI } from '@/constants';

interface Props {
  posts: IPost[];
  gridStyle?: 'blog' | 'normal';
  showHeading?: boolean;
  hoverEffect?: boolean;
  compact?: boolean;
  classes?: string;
}

export default function PostListNew(props: Props): ReactElement {
  const { posts, gridStyle = 'normal', hoverEffect, compact, classes } = props;
  const cardClasses = classNames('md:w-1/3 mb-5', 'lg:w-1/3 lg:max-w-xs ');
  const gridClasses = [
    gridStyle === 'normal' && 'lg:max-w-screen-xl',
    gridStyle === 'blog' && 'lg:max-w-screen-lg',
  ];
  return (
    <div className={classNames('mt-8', 'lg:mt-0', classes)}>
      <Container
        classes={classNames(
          'px-0 pb-0 flex flex-wrap justify-center max-w-screen-md',
          'md:px-0 md:pb-0 md:justify-center',
          'lg:pl-20 lg:pr-20 lg:py-10',
          gridClasses
        )}
      >
        {posts?.map((post) => {
          return (
            <PostCardNew
              route={generateRoute(post.slug)}
              hoverEffect={hoverEffect}
              compact={compact}
              classes={classNames(cardClasses)}
              key={post.id}
              {...post}
            />
          );
        })}
      </Container>
    </div>
  );
}
