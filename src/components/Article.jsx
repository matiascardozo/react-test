import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Article = (props) => {
  const { location } = props;
  return (
    <div>
      <span>
        <Link to="/">Back to list</Link>
        <h2>{location.state.article.title.rendered}</h2>
      </span>
      <div dangerouslySetInnerHTML={{ __html: location.state.article.content.rendered }} />
    </div>
  );
};

Article.propTypes = {
  location: PropTypes.shape({}).isRequired,
};

export default Article;
