const ARTICLE_LENGTH_LIMIT = 150;

const articleElement = document.getElementById('article-paragraph');
const toggleBtn = document.getElementById('toggle-more-less-btn');
const fullParagraphText = `Ultricies morbi urna lectus magna quisque ultricies velit enim nisi mi
volutpat ametuctor at viverra consequat turpis quam enim agna quisque ultricies velit enim nisi mi
volutpat amet id iorta auctor  id id porta auctor at viverra consequat turpis quam enim agna quisque ultricies velit enim nisi mi
volutpat amet id iorta auctor at viverra consequat turpis quam enim agna quisque ultricies velit enim nisi mi
volutpat atpat amet id iorta auctor at viverra consequat turpis quam enim agna quisque ultricies velit enim nisi mi
volutmet id id porta d porta auctor at viverra us magna quisque ultricies velit enim nisi mi
volutpat amet idrra conseq id porta auctor at viverra consequat turpis  velit enim nisi mi
volutpat amet id id porta auctor at viverra consequat turpis quam enim agna quisque ultricies velit enim nisi mi
volutpat amet id id porta auctor at viverra us magnt viverra us magna quisque ultricies velit enim nisi mi
volutpat amet idrra conseq id porta auctor at viverra conseqviverrauat turpis  velit enim nisi mi
volutpat amet id id porta auctor at viverra consea quisquequam enim agna quisque ultricies velit enim nisi mi
volutpat amet id id porta auctor at viveconsequat turpis quam ea consequat turpis qu atrpi vrpiive.`;
const minimizedParagraphText = minimizeText(fullParagraphText, ARTICLE_LENGTH_LIMIT);

articleElement.textContent = minimizedParagraphText;
let isFullParagraphDisplayed = false;

toggleBtn.addEventListener('click', function() {
    isFullParagraphDisplayed = !isFullParagraphDisplayed;

    if (isFullParagraphDisplayed) {
        articleElement.textContent = fullParagraphText;
        toggleBtn.textContent = 'read less';
    } else {
        articleElement.textContent = minimizedParagraphText;
        toggleBtn.textContent = 'read more';
    }
});

function minimizeText(paragraph, articleLengthLimit) {
    if (paragraph.length <= articleLengthLimit) 
        return paragraph;
    return paragraph.substring(0, articleLengthLimit) + '...';
}