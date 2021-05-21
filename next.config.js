//in order for next js to accept images url, we need to set
//up a module export and add all the domains before nexrt js images tag will accept those domains
// as images. since we are using links...the module takes an image object and an array of the images as the values.

module.exports = {
    images: {
        //now we enter the list of domains that we wanna white list
        domains: ["links.papareact.com", "fakestoreapi.com"]
    },
}