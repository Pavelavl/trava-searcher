export interface IUsd {
    rates: {
        RUB: number
    }
}

export interface IWeather {
    days: [
        {
            temp: number
        }
    ]
}

export interface IGeo {
    city: string
}

export interface IRes {
    items: [
        {
            kind: string,
            title: string,
            htmlTitle: string,
            link: string,
            displayLink: string,
            snippet: string,
            htmlSnippet: string,
            cacheId: string,
            formattedUrl: string,
            htmlFormattedUrl: string,
            pagemap?: {
                cse_image: [
                    {
                        src: string
                    }
                ]
            }
        },
    ]
}