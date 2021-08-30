import React from 'react'
import Footer from './footer';
import { toAddress, toBigNumber } from "@rarible/types";
import { MODEL_DATA, HOT_COLLECTION } from './constants';
import ipfs from './ipfs';


class ItemArtist extends React.Component {

    constructor(props){
        
        super(props)
        
        this.lazyMint = this.lazyMint.bind(this)
        this.itemData = {
            Name : "Exclusive Digital Asset",
            ImgIpfs : "QmNXVC1p3tfpS49jMbLyYZaDYEVQXqBbi6sdkVdrWMVSGH",
            Description : "I decided to revisit my first Playform project from 2019: my 'artificial self(-portrait)' series. I used the original Inspiration Collection, which consisted of approximately 30 self-portrait doodles that I had minted on Editional in mid-2019, and began a new Freeform Project.",
            Collection : "The Meta Key"
        }
        
        
    }


 
    async lazyMint(){
      
        console.log("lazy mint")

         var jsonStr = JSON.stringify(this.itemData);
         const buf = Buffer.from(jsonStr);
         const itemHash = await ipfs.add(buf)
         const uri = "ipfs/"+itemHash[0].hash
        //  console.log(uri)
        const item = await this.props.sdk.nft.mintLazy({
          '@type': 'ERC721',
          contract: toAddress('0x6ede7f3c26975aad32a475e1021d8f6f39c89d82'), // rinkeby default Rarible collection
          uri: uri,
          creators: [{ account: toAddress(this.props.accounts[0]), value: 10000 }],
          royalties: [],
        })
        if (item) {
          /**
           * Get minted nft through SDK
           */
          const token = await this.props.sdk.apis.nftItem.getNftItemById({ itemId: item.id })
          if (token) {
            alert("Congratulations You have Minted your FIRST NFT!! Welcome to WomenInBlockChain")
            // setCreateOrderForm({
            //   ...createOrderForm,
            //   contract: token.contract,
            //   tokenId: token.tokenId,
            // })
          }
        }
    }

    render() {
        
        return (
            <div>
                <main className="main">
    <div className="container">
      <div className="row row--grid">
        {/* breadcrumb */}
        <div className="col-12">
          <ul className="breadcrumb">
            <li className="breadcrumb__item">
              <a href="index2.html">Home</a>
            </li>
            <li className="breadcrumb__item">
              <a href="author.html">Author</a>
            </li>
            <li className="breadcrumb__item breadcrumb__item--active">Item</li>
          </ul>
        </div>
        {/* end breadcrumb */}
        {/* title */}
        <div className="col-12">
          <div className="main__title main__title--page">
            <h1>Exclusive digital asset</h1>
          </div>
        </div>
        {/* end title */}
      </div>
      <div className="row">
        {/* content */}
        <div className="col-12 col-xl-8">
          <div className="asset__item">
            <a className="asset__img" href="img/art/item1.png">
              <img src="/assets/img/art/item1.png" alt />
            </a>
            {/* share */}
            <div className="share share--asset">
              <a href="#" className="share__link share__link--fb">
                <svg
                  width={9}
                  height={17}
                  viewBox="0 0 9 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.56341 16.8197V8.65888H7.81615L8.11468 5.84663H5.56341L5.56724 4.43907C5.56724 3.70559 5.63693 3.31257 6.69042 3.31257H8.09873V0.5H5.84568C3.1394 0.5 2.18686 1.86425 2.18686 4.15848V5.84695H0.499939V8.6592H2.18686V16.8197H5.56341Z" />
                </svg>{" "}
                <span>share</span>
              </a>
              <a href="#" className="share__link share__link--tw">
                <svg
                  width={16}
                  height={12}
                  viewBox="0 0 16 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.55075 3.19219L7.58223 3.71122L7.05762 3.64767C5.14804 3.40404 3.47978 2.57782 2.06334 1.1902L1.37085 0.501686L1.19248 1.01013C0.814766 2.14353 1.05609 3.34048 1.843 4.14552C2.26269 4.5904 2.16826 4.65396 1.4443 4.38914C1.19248 4.3044 0.972149 4.24085 0.951164 4.27263C0.877719 4.34677 1.12953 5.31069 1.32888 5.69202C1.60168 6.22165 2.15777 6.74068 2.76631 7.04787L3.28043 7.2915L2.67188 7.30209C2.08432 7.30209 2.06334 7.31268 2.12629 7.53512C2.33613 8.22364 3.16502 8.95452 4.08833 9.2723L4.73884 9.49474L4.17227 9.8337C3.33289 10.321 2.34663 10.5964 1.36036 10.6175C0.888211 10.6281 0.5 10.6705 0.5 10.7023C0.5 10.8082 1.78005 11.4014 2.52499 11.6344C4.75983 12.3229 7.41435 12.0264 9.40787 10.8506C10.8243 10.0138 12.2408 8.35075 12.9018 6.74068C13.2585 5.88269 13.6152 4.315 13.6152 3.56293C13.6152 3.07567 13.6467 3.01212 14.2343 2.42953C14.5805 2.09056 14.9058 1.71983 14.9687 1.6139C15.0737 1.41264 15.0632 1.41264 14.5281 1.59272C13.6362 1.91049 13.5103 1.86812 13.951 1.39146C14.2762 1.0525 14.6645 0.438131 14.6645 0.258058C14.6645 0.22628 14.5071 0.279243 14.3287 0.374576C14.1398 0.480501 13.7202 0.639389 13.4054 0.734722L12.8388 0.914795L12.3247 0.565241C12.0414 0.374576 11.6427 0.162725 11.4329 0.0991699C10.8978 -0.0491255 10.0794 -0.0279404 9.59673 0.14154C8.2852 0.618204 7.45632 1.84694 7.55075 3.19219Z" />
                </svg>{" "}
                <span>tweet</span>
              </a>
              <a href="#" className="share__link share__link--link">
                <svg
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M8,12a1,1,0,0,0,1,1h6a1,1,0,0,0,0-2H9A1,1,0,0,0,8,12Zm2,3H7A3,3,0,0,1,7,9h3a1,1,0,0,0,0-2H7A5,5,0,0,0,7,17h3a1,1,0,0,0,0-2Zm7-8H14a1,1,0,0,0,0,2h3a3,3,0,0,1,0,6H14a1,1,0,0,0,0,2h3A5,5,0,0,0,17,7Z" />
                </svg>{" "}
                <span>copy link</span>
              </a>
            </div>
            {/* end share */}
            {/* likes */}
            <button className="asset__likes" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
              </svg>
              <span>358</span>
            </button>
            {/* end likes */}
          </div>
        </div>
        {/* end content */}
        {/* sidebar */}
        <div className="col-12 col-xl-4">
          <div className="asset__info">
            <div className="asset__desc">
              <h2>Descriptions</h2>
              <p>
                I decided to revisit my first Playform project from 2019: my
                'artificial self(-portrait)' series. I used the original
                Inspiration Collection, which consisted of approximately 30
                self-portrait doodles that I had minted on Editional in
                mid-2019, and began a new Freeform Project.{" "}
              </p>
            </div>
            <ul className="asset__authors">
              <li>
                <span>Creator</span>
                <div className="asset__author asset__author--verified">
                  <img src="img/avatars/avatar5.jpg" alt />
                  <a href="author.html">@midinh</a>
                </div>
              </li>
              <li>
                <span>Collection</span>
                <div className="asset__author ">
                  <img src="img/avatars/avatar9.jpg" alt />
                  <a href="collection.html">The Meta Key</a>
                </div>
              </li>
            </ul>
            {/* tabs */}
            <ul className="nav nav-tabs asset__tabs" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-toggle="tab"
                  href="#tab-1"
                  role="tab"
                  aria-controls="tab-1"
                  aria-selected="true"
                >
                  History
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#tab-2"
                  role="tab"
                  aria-controls="tab-2"
                  aria-selected="false"
                >
                  Bids
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#tab-3"
                  role="tab"
                  aria-controls="tab-3"
                  aria-selected="false"
                >
                  Details
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="tab-1"
                role="tabpanel"
              >
                <div
                  className="asset__actions asset__actions--scroll"
                  id="asset__actions--scroll"
                >
                  <div className="asset__action asset__action--verified">
                    <img src="img/avatars/avatar10.jpg" alt />
                    <p>
                      Bid placed for <b>11.00 ETH</b> 4 hours ago <br />
                      by <a href="author.html">@erikkk</a>
                    </p>
                  </div>
                  <div className="asset__action asset__action--verified">
                    <img src="img/avatars/avatar4.jpg" alt />
                    <p>
                      Bid placed for <b>10.00 ETH</b> 5 hours ago <br />
                      by <a href="author.html">@johndoe</a>
                    </p>
                  </div>
                  <div className="asset__action asset__action--verified">
                    <img src="img/avatars/avatar6.jpg" alt />
                    <p>
                      Bid placed for <b>2.508 ETH</b> 5 hours ago <br />
                      by <a href="author.html">@n1ckname</a>
                    </p>
                  </div>
                  <div className="asset__action asset__action--verified">
                    <img src="img/avatars/avatar4.jpg" alt />
                    <p>
                      Bid placed for <b>2.2799 ETH</b> 6 hours ago <br />
                      by <a href="author.html">@johndoe</a>
                    </p>
                  </div>
                  <div className="asset__action asset__action--verified">
                    <img src="img/avatars/avatar5.jpg" alt />
                    <p>
                      Put on sale for <b>0.55 ETH</b> 1 days ago <br />
                      by <a href="author.html">@midinh</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-2" role="tabpanel">
                <div className="asset__actions">
                  <div className="asset__action asset__action--verified">
                    <img src="img/avatars/avatar10.jpg" alt />
                    <p>
                      Bid placed for <b>11.00 ETH</b> 4 hours ago <br />
                      by <a href="author.html">@erikkk</a>
                    </p>
                  </div>
                  <div className="asset__action asset__action--verified">
                    <img src="img/avatars/avatar4.jpg" alt />
                    <p>
                      Bid placed for <b>10.00 ETH</b> 5 hours ago <br />
                      by <a href="author.html">@johndoe</a>
                    </p>
                  </div>
                  <div className="asset__action asset__action--verified">
                    <img src="img/avatars/avatar6.jpg" alt />
                    <p>
                      Bid placed for <b>2.508 ETH</b> 5 hours ago <br />
                      by <a href="author.html">@n1ckname</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-3" role="tabpanel">
                <ul className="asset__authors asset__authors--tab">
                  <li>
                    <span>Owner</span>
                    <div className="asset__author asset__author--verified">
                      <img src="img/avatars/avatar5.jpg" alt />
                      <a href="author.html">@midinh</a>
                    </div>
                  </li>
                  <li>
                    <span>Year created</span>
                    <p>2021</p>
                  </li>
                </ul>
              </div>
            </div>
            {/* end tabs */}
            {/* actions */}
            <div className="asset__btns">
              <button className="asset__btn asset__btn--clr" onClick={this.lazyMint} type="button">
                Lazy Mint
              </button>
              {/* <button className="asset__btn" type="button">
                Place a bid
              </button> */}
            </div>
            {/* end actions */}
          </div>
        </div>
        {/* end sidebar */}
      </div>
      {/* explore */}
      <section className="row row--grid">
        {/* title */}
        {/* <div className="col-12">
          <div className="main__title main__title--border-top">
            <h2>
              <a href="explore3.html">Other author assets</a>
            </h2>
          </div>
        </div> */}
        {/* end title */}
        {/* carousel */}
        <div className="col-12">
          <div className="main__carousel-wrap">
            <div
              className="main__carousel main__carousel--explore owl-carousel"
              id="explore"
            >
              <div className="card">
                <a href="item2.html" className="card__cover">
                  <img src="/assets/img/art/art1.png" alt />
                </a>
                <h3 className="card__title">
                  <a href="item2.html">Walking on Air</a>
                </h3>
                <div className="card__author">
                  <img src="/assets/img/avatars/avatar5.jpg" alt />
                  <a href="author.html">@midinh</a>
                </div>
                <div className="card__info">
                  <div className="card__price">
                    <span>Reserve price</span>
                    <span>4.89 ETH</span>
                  </div>
                  <button className="card__likes" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                    </svg>
                    <span>189</span>
                  </button>
                </div>
              </div>
              <div className="card">
                <a href="item2.html" className="card__cover">
                  <img src="/assets/img/art/art3.png" alt />
                </a>
                <h3 className="card__title">
                  <a href="item2.html">
                    Les Immortels, the Treachery of Artificial Shadows
                  </a>
                </h3>
                <div className="card__author card__author--verified">
                  <img src="/assets/img/avatars/avatar5.jpg" alt />
                  <a href="author.html">@midinh</a>
                </div>
                <div className="card__info">
                  <div className="card__price">
                    <span>Reserve price</span>
                    <span>2.61 ETH</span>
                  </div>
                  <button className="card__likes" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                    </svg>
                    <span>702</span>
                  </button>
                </div>
              </div>
              <div className="card">
                <a href="item2.html" className="card__cover">
                  <img src="/assets/img/art/art4.png" alt />
                </a>
                <h3 className="card__title">
                  <a href="item2.html">Flowers in Concrete</a>
                </h3>
                <div className="card__author">
                  <img src="/assets/img/avatars/avatar5.jpg" alt />
                  <a href="author.html">@midinh</a>
                </div>
                <div className="card__info">
                  <div className="card__price">
                    <span>Reserve price</span>
                    <span>3.19 ETH</span>
                  </div>
                  <button
                    className="card__likes card__likes--active"
                    type="button"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                    </svg>
                    <span>37</span>
                  </button>
                </div>
              </div>
              <div className="card">
                <a href="item2.html" className="card__cover">
                  <img src="/assets/img/art/art5.png" alt />
                </a>
                <h3 className="card__title">
                  <a href="item2.html">Creative Revolution</a>
                </h3>
                <div className="card__author card__author--verified">
                  <img src="/assets/img/avatars/avatar5.jpg" alt />
                  <a href="author.html">@midinh</a>
                </div>
                <div className="card__info">
                  <div className="card__price">
                    <span>Reserve price</span>
                    <span>1.11 ETH</span>
                  </div>
                  <button className="card__likes" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                    </svg>
                    <span>23</span>
                  </button>
                </div>
              </div>
              <div className="card">
                <a href="item2.html" className="card__cover">
                  <img src="/assets/img/art/art6.png" alt />
                </a>
                <h3 className="card__title">
                  <a href="item2.html">I Love You</a>
                </h3>
                <div className="card__author card__author--verified">
                  <img src="/assets/img/avatars/avatar5.jpg" alt />
                  <a href="author.html">@midinh</a>
                </div>
                <div className="card__info">
                  <div className="card__price">
                    <span>Reserve price</span>
                    <span>0.99 ETH</span>
                  </div>
                  <button className="card__likes" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                    </svg>
                    <span>358</span>
                  </button>
                </div>
              </div>
              <div className="card">
                <a href="item2.html" className="card__cover card__cover--video">
                  <img src="/assets/img/art/art7.png" alt />
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M21.53,7.15a1,1,0,0,0-1,0L17,8.89A3,3,0,0,0,14,6H5A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3h9a3,3,0,0,0,3-2.89l3.56,1.78A1,1,0,0,0,21,17a1,1,0,0,0,.53-.15A1,1,0,0,0,22,16V8A1,1,0,0,0,21.53,7.15ZM15,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8h9a1,1,0,0,1,1,1Zm5-.62-3-1.5V11.12l3-1.5Z" />
                  </svg>
                </a>
                <h3 className="card__title">
                  <a href="item2.html">Walking on Air</a>
                </h3>
                <div className="card__author">
                  <img src="/assets/img/avatars/avatar5.jpg" alt />
                  <a href="author.html">@midinh</a>
                </div>
                <div className="card__info">
                  <div className="card__price">
                    <span>Reserve price</span>
                    <span>1.63 ETH</span>
                  </div>
                  <button className="card__likes" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                    </svg>
                    <span>90</span>
                  </button>
                </div>
              </div>
              <div className="card">
                <a href="item2.html" className="card__cover">
                  <img src="/assets/img/art/art8.png" alt />
                </a>
                <h3 className="card__title">
                  <a href="item2.html">Tranquility</a>
                </h3>
                <div className="card__author">
                  <img src="/assets/img/avatars/avatar5.jpg" alt />
                  <a href="author.html">@midinh</a>
                </div>
                <div className="card__info">
                  <div className="card__price">
                    <span>Reserve price</span>
                    <span>2.55 ETH</span>
                  </div>
                  <button className="card__likes" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                    </svg>
                    <span>64</span>
                  </button>
                </div>
              </div>
            </div>
            <button
              className="main__nav main__nav--prev"
              data-nav="#explore"
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" />
              </svg>
            </button>
            <button
              className="main__nav main__nav--next"
              data-nav="#explore"
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
              </svg>
            </button>
          </div>
        </div>
        {/* end carousel */}
      </section>
      {/* end explore */}
    </div>
  </main>
            </div>
        )
    }
}

export default ItemArtist;