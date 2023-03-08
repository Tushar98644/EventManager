import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
// import Inline from "yet-another-react-lightbox/plugins/inline";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useState, useEffect } from "react";
import axios from "axios";
import {motion} from "framer-motion";
import styled from "styled-components";

const Button_main = styled(motion.button)`
    background-color:red;
    border: none;
    color: white;
    padding: 15px 42px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 0.5vw 36vw 2vw;
    border-radius: 7vw;
    cursor: pointer;
`;

const Gallery_base = (props) => {
    const [open, setOpen] = useState(false);

    const [gallery, setGallery] = useState([]);

    const getGallery = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/images');
        console.log(response.data);
        setGallery(response.data);
    }

    useEffect(() => {
        getGallery();
    }, [])

    return (
        <>
            <Button_main whileHover={{scale:1.1}} whileTap={{scale:0.8}}    type="button" onClick={() => setOpen(true)}>
                View Gallery
            </Button_main>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                slides={[
                    ...gallery.map((image) =>(
                        { src: image.image }
                    ))
                             ]}
            />
        </>
    );
};

export default Gallery_base;