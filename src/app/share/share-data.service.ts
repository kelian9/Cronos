import { Share } from './share';
export class ShareData {
    private shareData:Share[] = [
        {src: "../assets/images/share-icons/vk.svg", href: "https://vk.com/share.php?url=http://cronoscraft.ru"},
        {src: "../assets/images/share-icons/facebook.svg", href: "https://www.facebook.com/"},
        {src: "../assets/images/share-icons/insta.svg", href: "https://www.instagram.com/cronoscraft/"},
        {src: "../assets/images/share-icons/telegram.svg", href: "https://telegram.org/"},
        {src: "../assets/images/share-icons/twitter.svg", href: "https://twitter.com/?lang=ru"}
    ];
    public getData() {
        return this.shareData;
    }
}