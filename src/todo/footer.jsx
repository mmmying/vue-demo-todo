import '../assets/styles/footer.styl'

export default {
    data() {
        return {
            author: 'mmmying'
        }
    },
    render() {
        return (
            <div id="footer">
                <span>Writen by {this.author}</span>
            </div>
        )
    }
}