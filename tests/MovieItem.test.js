import React from 'react';
import MovieItem from '../app/components/MovieItem';
import renderer from 'react-test-renderer';

const movie = {
    id: 1,
    name: 'movie1'
};
const handleEdit = () => 1;
const handleDelete = () => 1;

test('MovieItem render', () => {
    const component = renderer.create(
      <MovieItem
          key={movie.name}
          movie={ movie }
          handleEdit={ (movieId) => handleEdit(movieId) }
          handleDelete={ (movieId) => handleDelete(movieId) }
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
