export default [
    { 
        id: 1, 
        header: 'Graphql', 
        text: 'at Purplebricks',
        src: './graphql.png',
    },
    { 
        id: 2, 
        header: 'Graphql:',
        text: 'A query language for your API',
        html: `<iframe width="560" height="315" src="https://www.youtube.com/embed/eIQh02xuVw4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        layout: 'center',
        background: 'dark'
    },
    { 
        id: 3, 
        header: 'Terminology',
        html: '<h2>query</h2><p>a request for data</p><h2>mutation</h2><p>a post / patch / put - we are changing the data</p><h2>subscription</h2><p>a stream of data, using webhooks, which will push new data to the endpoint subscribing to it (not yet implemented at PB)</p>',
        layout: 'center',
        background: 'dark'
    },
    {
        id: 4, 
        header: 'Terminology (continued)',
        html: '<h2>connection</h2><p>a relationship between one node and another</p><h2>edge</h2><p>the relationship between the originating node and its relatives</p><h2>node</h2><p>an object situated at the end of that edge</p>',
        layout: 'center',
        background: 'dark'
    },
    {
        id: 5, 
        header: '1. The Connection',
        screenshot: './connection.png',
        layout: '2col',
        background: 'dark'
    },
    {
        id: 6, 
        header: '1. The connection (continued)',
        text: 'The connection handles the following:',
        html: '<ul><li>1. Connecting the API endpoint</li><li>2. Hashing queries for smarter API responses</li><li>3. Merging paginated data</li><li>4. Hydrating data on the client</li></ul>',
        layout: 'center',
        background: 'dark'
    },
    {
        id: 7, 
        header: '1. The connection - tips for use,',
        text: 'Don\'t use this in _App.js. Although this is the recommended way, it breaks our infrastructure somehow. So you will need to initiate a new provider for each page. Any GraphQL queries need to be inside this parent component. Also don\'t use on pages with SSR. If you need a graphql connection on a page with SSR use @next/dynamic to load the component in on the client only.',
        layout: 'center',
        background: 'dark'
    },
    {
        id: 8, 
        header: '2. The query',
        text: 'To use graphql, you pass a request body, plus variables and other data pertinent to the request',
        screenshot: './basic-query.png',
        layout: 'center',
        background: 'light'
    },
    {
        id: 9, 
        header: '2. The query (continued)',
        text: 'Here is a basic query. None of these field are required, and there are others such as properties, threads etc that you can add. Use https://qa.pbr.so/graphql or Insomnia to discover what is available',
        screenshot: './user-query.png',
        layout: 'center',
        background: 'light'
    },
    {
        id: 10, 
        header: '2. Query variables',
        text: 'Query variables',
        layout: 'center',
        background: 'light',
        text: 'query variables are passed into the query using the dollar sign:',
        screenshot: './variables-1.png'
    },
    {
        id: 11, 
        header: '2. Using query variables',
        text: 'Query variables',
        layout: 'center',
        background: 'light',
        text: 'They must comply to the type that the GraphQL endpoint is expecting, but can be named anything. You need to declare the type when you pass it into the GraphQL query.',
        screenshot: './variables-2.png'
    },
    {
        id: 12, 
        header: '3. Other useful things useQuery can do',
        layout: 'center',
        background: 'light',
        text: 'useQuery has some other useful parameters, such as polling, a callback for when the fetch is complete, and how errors are handled. You also use it to fetch more data',
        html: '<pre><code>fetchMore</pre></code> is available on the initial <pre><code>useQuery</pre></code> response.',
        screenshot: './fetch-more.png'
    },
]