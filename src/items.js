export default [
    { 
        id: 1, 
        header: 'Graphql', 
        text: 'at Purplebricks',
        src: './graphql.png',
    },
    { 
        id: 2, 
        header: 'What we will cover:', 
        html: '<ol><li>Basic terminology</li><li>Connecting to the GraphQL API</li><li>How to query data</li><li>How to send mutations to the API</li><li>Error handling</li><li>What the future holds for GraphQL at Purple Bricks</li></ol>',
    },
    { 
        id: 3, 
        header: 'Graphql:',
        text: 'A query language for your API',
        html: `<iframe width="560" height="315" src="https://www.youtube.com/embed/eIQh02xuVw4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        layout: 'center',
        background: 'dark'
    },
    { 
        id: 4, 
        header: '1. Terminology',
        html: '<h2>query</h2><p>a request for data</p><h2>mutation</h2><p>a post / patch / put - we are changing the data</p><h2>subscription</h2><p>a stream of data, using webhooks, which will push new data to the endpoint subscribing to it (not yet implemented at PB)</p>',
        layout: 'center',
        background: 'dark'
    },
    {
        id: 5, 
        header: '1. Terminology (continued)',
        html: '<h2>connection</h2><p>a relationship between one node and another</p><h2>edge</h2><p>the relationship between the originating node and its relatives</p><h2>node</h2><p>an object situated at the end of that edge</p><br/>For more information on these terms, please see <a href="https://www.apollographql.com/blog/graphql/explaining-graphql-connections/#de1c">This blog post from Apollo GraphQL</a>',
        layout: 'center',
        background: 'dark'
    },
    {
        id: 6, 
        header: '2. The Connection',
        screenshot: './connection.png',
        layout: '2col',
        background: 'dark'
    },
    {
        id: 7, 
        header: '2. The connection (continued)',
        text: 'The connection handles the following:',
        html: '<ul><li>1. Connecting the API endpoint</li><li>2. Hashing queries for smarter API responses</li><li>3. Merging paginated data</li><li>4. Hydrating data on the client</li></ul>',
        layout: 'center',
        background: 'dark'
    },
    {
        id: 8, 
        header: '2. The connection - tips for use,',
        text: 'Don\'t use this in _App.js. Although this is the recommended way, it breaks our infrastructure somehow. So you will need to initiate a new provider for each page. Any GraphQL queries need to be inside this parent component. Also don\'t use on pages with SSR. If you need a graphql connection on a page with SSR use @next/dynamic to load the component in on the client only.',
        layout: 'center',
        screenshot: './dynamic-import.png',
        background: 'dark'
    },
    {
        id: 9, 
        header: '3. The query',
        text: 'To use graphql, you pass a request body, plus variables and other data pertinent to the request',
        screenshot: './basic-query.png',
        layout: 'center',
        background: 'light'
    },
    {
        id: 10, 
        header: '3. The query (continued)',
        text: 'Here is a basic query. None of these field are required, and there are others such as properties, threads etc that you can add. Use https://qa.pbr.so/graphql or Insomnia to discover what is available',
        screenshot: './user-query.png',
        layout: 'center',
        background: 'light'
    },
    {
        id: 11, 
        header: '3. Query variables',
        text: 'Query variables',
        layout: 'center',
        background: 'light',
        text: 'query variables are passed into the query using the dollar sign:',
        screenshot: './variables-1.png'
    },
    {
        id: 12, 
        header: '3. Using query variables',
        text: 'Query variables',
        layout: 'center',
        background: 'light',
        text: 'They must comply to the type that the GraphQL endpoint is expecting, but can be named anything. You need to declare the type when you pass it into the GraphQL query.',
        screenshot: './variables-2.png'
    },
    {
        id: 13, 
        header: '3. Other useful things useQuery can do',
        layout: 'center',
        background: 'light',
        text: 'useQuery has some other useful parameters, such as polling, a callback for when the fetch is complete, and how errors are handled. You also use it to fetch more data',
        html: '<pre><code>fetchMore</pre></code> is available on the initial <pre><code>useQuery</pre></code> response.',
        screenshot: './fetch-more.png'
    },
    {
        id: 15, 
        header: '4. Error handling',
        layout: 'center',
        background: 'dark',
        text: 'GraphQL errors often return as http status 200. You will have an errors array returned which you can use to inform the user whats happening or redirect them as appropriate. You can pass a parameter to useQuery to decide what to do with errors, either return what data you did receive so you can render a partial response, or to dismiss the data altogether.'
    },
    {
        id: 16, 
        header: '5. Mutations',
        layout: 'center',
        background: 'dark',
        screenshot: './mutations.png',
        text: 'Mutations work very similarly. You can refetch queries (to update local data). Apollo Client is very smart too, you can update the local cache with the new data rather then go to the server to get back updates you just made.'
    },
    {
        id: 20, 
        header: '6. The future',
        layout: 'center',
        background: 'light',
        text: 'GraphQL already calls data from several underlying APIs including users, messages and properties. More APIs are being added. Eventually, there will be a federated GraphQL system that will allow you to call one API and receive exactly the data you need, when you need it.',
        screenshot: './pb-graphql-plan.png'
    },
]