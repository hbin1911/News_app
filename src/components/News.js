import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Justine Calma",
      title: "Can banks push Bitcoin to clean up its act?",
      description:
        "Banks and asset managers have a big stake in Bitcoin, so Greenpeace wants them to crack down on the cryptocurrency’s pollution.",
      url: "https://www.theverge.com/2023/7/11/23778688/bitcoin-energy-emissions-climate-change-banks-asset-managers-greenpeace",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/ODx_QBV2qCE_dfhHtwtaZ8W6J8I=/0x0:7144x4743/1200x628/filters:focal(3572x2372:3573x2373)/cdn.vox-cdn.com/uploads/chorus_asset/file/24763884/1235926940.jpg",
      publishedAt: "2023-07-11T14:00:00Z",
      content:
        "Can banks push Bitcoin to clean up its act?\r\nCan banks push Bitcoin to clean up its act?\r\n / Banks and asset managers have a big stake in Bitcoin, so Greenpeace wants them to crack down on the crypto… [+4372 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Kevin Hurler",
      title:
        "SEC Reportedly Asked Coinbase to Halt All Trading—Except for Bitcoin",
      description:
        "Coinbase’s CEO Brian Armstrong reportedly told the Financial Times that the U.S. Securities & Exchange Commission asked him to halt trading in the exchange with all currencies except bitcoin. According to Armstrong, the suggestion came just before the SEC sue…",
      url: "https://gizmodo.com/sec-asked-coinbase-to-halt-trading-except-for-bitcoin-1850691411",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/76f95899df261776c441932b344183f1.jpg",
      publishedAt: "2023-07-31T14:55:00Z",
      content:
        "Coinbases CEO Brian Armstrong reportedly told the Financial Times that the U.S. Securities &amp; Exchange Commission asked him to halt trading in the exchange with all currencies except bitcoin. Acco… [+1850 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Cheryl Eddy",
      title:
        "Everyone's Favorite Knife-Wielding Robot Returns in Next Week's Futurama",
      description:
        "Futurama’s new season continues its examination of 3023 by way of 2023 with next week’s “How the West Was 1010001,” which sees the gang heading to, ahem, Doge City to cash in on the bitcoin mining craze. Like most places they visit, they encounter absurdities…",
      url: "https://gizmodo.com/futurama-hulu-new-ep-3-clips-bitcoin-crypto-wild-west-1850708869",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/11cf0e30bb3cfd27a7b0f55aa6eddfd3.jpg",
      publishedAt: "2023-08-04T20:45:00Z",
      content:
        "Futuramas new season continues its examination of 3023 by way of 2023 with next weeks How the West Was 1010001, which sees the gang heading to, ahem, Doge City to cash in on the bitcoin mining craze.… [+2351 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Matthew Fox",
      title:
        "Bitcoin could soar to $180,000 before the April 2024 halving as potential BlackRock ETF helps drive demand, Fundstrat says",
      description:
        '"We anticipate [a bitcoin ETF] would attract new investors and generate increased demand for bitcoin," Fundstrat said.',
      url: "https://markets.businessinsider.com/news/currencies/bitcoin-price-outlook-blackrock-etf-filing-demand-180000-crypto-halving-2023-7",
      urlToImage:
        "https://i.insider.com/64bebc9fbea3440019602937?width=1200&format=jpeg",
      publishedAt: "2023-07-24T18:47:22Z",
      content:
        "Wenjin Chen/Getty Images\r\n<ul><li>The price of bitcoin could soar to $180,000 before the scheduled April 2024 halving, according to Fundstrat.</li><li>Fundstrat said a bitcoin ETF from BlackRock coul… [+2884 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
        articles: this.articles,
        loading: false
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>DailyNews - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="mytitle" description="mydesc" newsurl="TODO"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="mytitle" description="mydesc" />
          </div>
          <div className="col-md-4">
            <NewsItem title="mytitle" description="mydesc" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
