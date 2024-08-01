//your JS code here. If required.
const links = [
    {
        href: 'https://acciojob.com/blog/brute-force-vs-optimization',
        article_name: 'Brute Force vs. Optimization'
    },
    {
        href: 'https://acciojob.com/blog/dsa-vs-competitive-programming',
        article_name: 'DSA vs. Competitive Programming'
    },
    {
        href: 'https://acciojob.com/blog/complete-guide-on-flexbox',
        article_name: 'Complete Guide on FlexBox'
    }
];

links.forEach(({ href, article_name }) => {
    cy.contains('a', article_name).should('have.attr', 'href', href);
});
