export interface Post{
    _id: string;
    publishedAt: string;
    bannerTitle: string;
    bannerPara: string;
    bannerText: string;
    mainImage: {
        asset: {
            url: string;
        };
    };
    ClinicTitle: string;
    DiscoverService: string;
    gsimage: {
        asset: {
            url: string;
        };
    };
    gsHeading: string;
    gsDesc: string; 
    gsText: string; 
    dsimage: {
        asset: {
            url: string;
        };
    };
    dsHeading: string; 
    dsDesc: string;
    dsText: string;
    locationText: string;
    locationTitle: string;
    locationPara: string;
    destination: url;
    slug: {
        current: string;
    };
}

export interface Accord{
    _id: string;
    accordianTitle: string;
    accordianAddress: string;
    accordianTime: string;
    accordianTime2: string;
    accordianText: string;
    accordianMobile: string;
    slug: {
        current: string;
    };
}