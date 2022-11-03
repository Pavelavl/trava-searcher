
export type IData = [data: IRes, setData: React.Dispatch<React.SetStateAction<never[]>>]

export interface IRes {
    kind: string,
    url: {
        type: string,
        template: string,
    },
    queries: {
        previousPage: [
            {
                title: string,
                totalResults: string,
                searchTerms: string,
                count: number,
                startIndex: number,
                inputEncoding: string,
                outputEncoding: string,
                safe: string,
                cx: string,
            }
        ],
        request: [
            {
                title: string,
                totalResults: string,
                searchTerms: string,
                count: number,
                startIndex: number,
                inputEncoding: string,
                outputEncoding: string,
                safe: string,
                cx: string,
            }
        ],
        nextPage: [
            {
                title: string,
                totalResults: string,
                searchTerms: string,
                count: number,
                startIndex: number,
                inputEncoding: string,
                outputEncoding: string,
                safe: string,
                cx: string,
            }
        ]
    },
    context: {
        title: string,
    },
    searchInformation: {
        searchTime: number,
        formattedSearchTime: string,
        totalResults: string,
        formattedTotalResults: string,
    },
    items: [
        {
            kind: string,
            title: string,
            htmlTitle: string,
            link: string,
            displayLink: string,
            snippet: string,
            htmlSnippet: string,
            cacheId?: string,
            formattedUrl: string,
            htmlFormattedUrl: string,
            pagemap: {
                metatags: [
                    {
                        viewport: string
                    }
                ]
            }
        },
        {
            kind: string,
            title: string,
            htmlTitle: string,
            link: string,
            displayLink: string,
            snippet: string,
            htmlSnippet: string,
            cacheId?: string,
            formattedUrl: string,
            htmlFormattedUrl: string,
            pagemap: {
                metatags: [
                    {
                        viewport: string
                    }
                ]
            }
        },
        {
            kind: string,
            title: string,
            htmlTitle: string,
            link: string,
            displayLink: string,
            snippet: string,
            htmlSnippet: string,
            cacheId?: string,
            formattedUrl: string,
            htmlFormattedUrl: string,
            pagemap: {
                metatags: [
                    {
                        viewport: string
                    }
                ]
            }
        },
        {
            kind: string,
            title: string,
            htmlTitle: string,
            link: string,
            displayLink: string,
            snippet: string,
            htmlSnippet: string,
            cacheId?: string,
            formattedUrl: string,
            htmlFormattedUrl: string,
            pagemap: {
                metatags: [
                    {
                        viewport: string
                    }
                ]
            }
        },
        {
            kind: string,
            title: string,
            htmlTitle: string,
            link: string,
            displayLink: string,
            snippet: string,
            htmlSnippet: string,
            cacheId?: string,
            formattedUrl: string,
            htmlFormattedUrl: string,
            pagemap: {
                metatags: [
                    {
                        viewport: string
                    }
                ]
            }
        },
        {
            kind: string,
            title: string,
            htmlTitle: string,
            link: string,
            displayLink: string,
            snippet: string,
            htmlSnippet: string,
            cacheId?: string,
            formattedUrl: string,
            htmlFormattedUrl: string,
            pagemap: {
                metatags: [
                    {
                        viewport: string
                    }
                ]
            }
        },
        {
            kind: string,
            title: string,
            htmlTitle: string,
            link: string,
            displayLink: string,
            snippet: string,
            htmlSnippet: string,
            cacheId?: string,
            formattedUrl: string,
            htmlFormattedUrl: string,
            pagemap: {
                metatags: [
                    {
                        viewport: string
                    }
                ]
            }
        },
        {
            kind: string,
            title: string,
            htmlTitle: string,
            link: string,
            displayLink: string,
            snippet: string,
            htmlSnippet: string,
            cacheId?: string,
            formattedUrl: string,
            htmlFormattedUrl: string,
            pagemap: {
                metatags: [
                    {
                        viewport: string
                    }
                ]
            }
        },
        {
            kind: string,
            title: string,
            htmlTitle: string,
            link: string,
            displayLink: string,
            snippet: string,
            htmlSnippet: string,
            cacheId?: string,
            formattedUrl: string,
            htmlFormattedUrl: string,
            pagemap: {
                metatags: [
                    {
                        viewport: string
                    }
                ]
            }
        },
        {
            kind: string,
            title: string,
            htmlTitle: string,
            link: string,
            displayLink: string,
            snippet: string,
            htmlSnippet: string,
            cacheId?: string,
            formattedUrl: string,
            htmlFormattedUrl: string,
            pagemap: {
                metatags: [
                    {
                        viewport: string
                    }
                ]
            }
        },
    ]
}