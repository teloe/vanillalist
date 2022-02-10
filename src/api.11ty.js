class Main {
    data() {
        return {
            permalink: "/api/plugins.json",
        };
    }

    async render(data) {
        const list = (await Promise.all(data.collections.plugins.map(async plugin => {
            return {
                ...plugin,
                bg: await this.base64('public' + await this.getUrl(this.png(this.resize('./uploads/' + plugin.image, { width: 1, height: 1 })))),
                imageWebp: {
                    image92: await this.getUrl(this.webp(this.resize('./uploads/' + plugin.image, { width: 92, height: 58 }))),
                    image184: await this.getUrl(this.webp(this.resize('./uploads/' + plugin.image, { width: 184, height: 116 }))),
                    image308: await this.getUrl(this.webp(this.resize('./uploads/' + plugin.image, { width: 308, height: 195 }))),
                    image616: await this.getUrl(this.webp(this.resize('./uploads/' + plugin.image, { width: 616, height: 390 })))
                },
                imagePng: {
                    image92: await this.getUrl(this.png(this.resize('./uploads/' + plugin.image, { width: 92, height: 58 }))),
                    image184: await this.getUrl(this.png(this.resize('./uploads/' + plugin.image, { width: 184, height: 116 }))),
                    image308: await this.getUrl(this.png(this.resize('./uploads/' + plugin.image, { width: 308, height: 195 }))),
                    image616: await this.getUrl(this.png(this.resize('./uploads/' + plugin.image, { width: 616, height: 390 })))
                }
            }
        })));

        return JSON.stringify(list)
    }
}

module.exports = Main;
