import Image from "next/image";

export default function InstaVideo() {
  return (
    <div>
      {/* <blockquote className="instagram-media custom-instagram-media " data-instgrm-version="12"
                                  data-instgrm-permalink='https://www.instagram.com/reel/CyNRUvSLgBj/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='
                                  data-instgrm-captioned data-instgrm-2x data-instgrm-post-id="MEDIA_ID">
                              </blockquote> */}
      <Image
        src="https://images.pexels.com/photos/989967/pexels-photo-989967.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt="image"
        priority
        width={400}
        height={400}
      />
    </div>
  );
}
