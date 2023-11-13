<div class="picture-container">
    <div class="img"></div>
    <div class="img"></div>
    <div class="img"></div>
</div>
<style>
    .picture-container {
        display: flex;
        height: 100%;
        width: 100%;
        padding: 1em;
        box-sizing: border-box;
    }

    .img {
        flex: 1;
        height: 100%;
        transition: all .3s;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        opacity: 0.8;
    }

    .img:hover {
        flex: 10;
        opacity: 1;
    }

    .img:nth-child(3) {
        background-image: URL("/jes.jpeg");
    }
    .img:nth-child(2) {
        background-image: URL("/työn-touhussa.JPG");
    }
    .img:nth-child(1) {
        background-image: URL("/friba-lentää.JPG");
    }

    
</style>