import React, { Component } from 'react';
import Post from './post';
import Nav from './Nav';

const query = `
  {
    user(username: "hardeborlaa") {
      publication {
        posts {
          slug
          title
          brief
          coverImage
        }
      }
    }
  }
`;

class BlogPost extends Component {
  state = { 
    posts: []
  };

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = async () => {
    const response = await fetch('https://api.hashnode.com/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })

    const apiResponse = await response.json();
    const { posts } = apiResponse.data.user.publication;
    this.setState({ posts: posts});
  };


  render() { 
    return (
      <body className='bg-pink-50 h-screen'>
        <Nav/>
        <main>
        {this.state.posts.map((post, index) => (
            <Post post={post} key={index} />
        ))}
      </main>
      </body>
    );
  }
}

export default BlogPost;