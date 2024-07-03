import React from 'react';
import ReactDOM from 'react-dom';
import ArticleCard from './ArticleCard';

const App = () => {
    return (
        <div>
            <h1>文章列表</h1>
            <ArticleCard
                imageSrc="https://plus.unsplash.com/premium_photo-1685190440285-981dbddbadac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="文章标题"
                description="这是一个简短的文章简介..."
                link="https://unsplash.com/photos/two-lounge-chairs-sitting-next-to-a-swimming-pool-Q4iV42UXwuQ"
            />
            <ArticleCard
                imageSrc="https://plus.unsplash.com/premium_photo-1686771373999-cb02dd695f12?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="另一个文章标题"
                description="这是另一个简短的文章简介..."
                link="https://unsplash.com/collections/kKxpdZb6BFM/summer-travel"
            />
        </div>
    );
};

export default App;