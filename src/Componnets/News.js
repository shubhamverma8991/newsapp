import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "Matt Brian",
      title: "Apple's 2021 iPad drops to an new all-time low of $250",
      description:
        "One of the best selling points of Apple devices is that even when the company releases new hardware, previous generations continue to be supported for years to come. That's the case for the popular 2021 10.2-inch iPad, which now finds itself on sale at Amazon…",
      url: "https://www.engadget.com/apple-2021-ipad-new-all-time-low-amazon-084925394.html",
      urlToImage:
        "https://s.yimg.com/uu/api/res/1.2/iOCbsnnNZuBZ4i5lrydgpg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-03/af4161d0-ac33-11ec-aff9-4874008b78db.cf.jpg",
      publishedAt: "2023-02-27T08:49:25Z",
      content:
        "One of the best selling points of Apple devices is that even when the company releases new hardware, previous generations continue to be supported for years to come. That's the case for the popular 2… [+1144 chars]",
    },
    {
      source: {
        id: null,
        name: "Android Central",
      },
      author: "derrek.lee@futurenet.com (Derrek Lee)",
      title: "Nothing, Motorola, Xiaomi, and others tap Qualcomm for satellite connectivity",
      description: "Qualcomm is partnering with Android OEMs for satellite connectivity in future smartphones.",
      url: "https://www.androidcentral.com/phones/qualcomm-snapdragon-satellite-android-partners",
      urlToImage: "https://cdn.mos.cms.futurecdn.net/kEP2hDq5YtKYGH3zDbFpc6-1200-80.jpg",
      publishedAt: "2023-02-27T07:00:50Z",
      content:
        "<ul><li>Satellite connectivity has been the latest mobile connectivity standard companies are investing in.</li><li>Qualcomm announced Snapdragon Satellite in January to bring satellite connectivity … [+2230 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title: "How iPhone passcode is helping thieves steal your money and data - The Tribune India",
      description:
        "<ol><li>How iPhone passcode is helping thieves steal your money and data  The Tribune India\r\n</li><li>A woman who got locked out of her Apple account minutes after her iPhone was stolen and had $10,000 taken from her bank account says Apple was 'not helpful a…",
      url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMifGh0dHBzOi8vd3d3LnRyaWJ1bmVpbmRpYS5jb20vbmV3cy9zY2llbmNlLXRlY2hub2xvZ3kvaG93LWlwaG9uZS1wYXNzY29kZS1pcy1oZWxwaW5nLXRoaWV2ZXMtc3RlYWwteW91ci1tb25leS1hbmQtZGF0YS00ODM0NzDSAXxodHRwczovL3d3dy50cmlidW5laW5kaWEuY29tL25ld3Mvc2NpZW5jZS10ZWNobm9sb2d5L2hvdy1pcGhvbmUtcGFzc2NvZGUtaXMtaGVscGluZy10aGlldmVzLXN0ZWFsLXlvdXItbW9uZXktYW5kLWRhdGEtNDgzNDcw?oc%3D5%26hl%3Den-CA%26gl%3DCA%26ceid%3DCA:en&gl=FR&hl=en-CA&pc=n&src=1",
      urlToImage: null,
      publishedAt: "2023-02-27T03:41:00Z",
      content:
        "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Ben Schwan",
      title: "Apple-Headset: iPhone offenbar keine Pflicht",
      description:
        'Im Gegensatz zur Apple Watch soll es sich beim Reality Pro um ein Stand-Alone-Gerät handeln, sagen Insider. Angeblich kann man sogar "tippen".',
      url: "https://www.heise.de/news/Apple-Headset-iPhone-offenbar-keine-Pflicht-7528267.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/7/0/8/5/2/7/shutterstock_1274393260-34cdb5901130dbe6.jpg",
      publishedAt: "2023-02-27T08:51:00Z",
      content:
        "Apples erstes Mixed-Reality-Headset soll ein autarkes Gerät werden im Gegensatz zur letzten großen neuen Produktkategorie des Konzerns, der Apple Watch. Benötigt man für diese zwingend ein iPhone zur… [+2623 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Holger Zelder, Tobias Engler",
      title: "heise+ | Leinwand für Kreative: Erste Schritte in Apple Freeform",
      description:
        "Apples neueste App ermöglicht die kreative Zusammenarbeit im Team und über unterschiedliche Apple-Geräte hinweg. So funktioniert das in der Praxis.",
      url: "https://www.heise.de/ratgeber/Leinwand-fuer-Kreative-Erste-Schritte-in-Apple-Freeform-7490150.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/9/5/9/9/3/mi_01_23_freeform_aufmacher_digital-bd4fce67f2cbfd3f.jpg",
      publishedAt: "2023-02-27T08:30:00Z",
      content:
        "Inhaltsverzeichnis\r\nZusammen mit iOS 16.2, iPadOS 16.2 und macOS Ventura 13.1 hat Apple die erste Finalversion von Freeform veröffentlicht. Auf älteren Systemen läuft Freeform nicht. Die App wird aut… [+2476 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Ben Schwan",
      title: "Belkin: iPhone-MagSafe-Mount für Continuity Camera auch für den Desktop",
      description:
        "Nach der Version für Mac-Notebooks hat Belkin nun auch eine Desktop-Version seines iPhone-MagSafe-Mount für die Kameranutzung auf den Markt gebracht.",
      url: "https://www.heise.de/news/Belkin-iPhone-MagSafe-Mount-fuer-Continuity-Camera-auch-fuer-den-Desktop-7527965.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/7/0/8/3/6/9/belkinmacmount-e76dc544f1edc9c6.png",
      publishedAt: "2023-02-27T10:15:00Z",
      content:
        "Die Kameraeinheit im iPhone schlägt reguläre Webcams normalerweise um Längen inklusive der in iMac, Studio Display oder MacBook integrierten FaceTime-Kameras. Apple ermöglicht Nutzern daher seit macO… [+2161 chars]",
    },
  ];

  // For State
  constructor() {
    super();
    console.log("Inside Constructor");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount() {
    console.log("Inside componentDidMount");
    let completeNewsUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=31c6edef4fcc413aaa1bbbb609971bca";
    let data = await fetch(completeNewsUrl);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles });
  }

  render() {
    // console.log("DOM");
    return (
      <div className="container my-3">
        <h2>Samachar </h2>
        <div className="row">
          {/* Map Loop to Display N Number of News */}
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title == null ? "" : element.title.slice(0, 45)}
                  description={element.description == null ? "" : element.description.slice(0, 88)}
                  imgURL={element.urlToImage}
                  newsURL={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
