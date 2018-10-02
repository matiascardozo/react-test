import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CompleteList = (props) => {
  const { articleList } = props;
  return (
    <div>
      <h1>Articles</h1>
      {articleList.map(value => (
        <div key={value.id} className="Excerpt">
          <Link
            to={{
              pathname: `/article/${value.id}`,
              state: { article: value },
            }}
          >
            <h3>{value.title.rendered}</h3>
          </Link>
          <p>
            <small>{value.date}</small>
          </p>
          <div>
            <img src={value.img} alt={value.img} />
            <div dangerouslySetInnerHTML={{ __html: value.excerpt.rendered }} />
          </div>
          <hr />
          <br />
        </div>
      ))}
    </div>
  );
};

CompleteList.propTypes = {
  articleList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default CompleteList;
