/*
** This is a custom plugin for common computed values and methods
*/

import Vue from 'vue';
import { vElementVisibility } from "@vueuse/components";

const vueCommon = {
    directives: {
        elementVisibility: vElementVisibility,
    },
    computed: {
        $_detectOS() {
            if (process.client) {
                const platform = navigator.platform.toLowerCase();
                const iosPlatforms = ['iphone', 'ipad', 'ipod', 'ipod touch'];
                if (platform.includes('mac')) return 'MacOS';
                if (iosPlatforms.includes(platform)) return 'iOS';
                if (platform.includes('win')) return 'Windows';
                if (/android/.test(navigator.userAgent.toLowerCase())) return 'Android';
                if (/linux/.test(platform)) return 'Linux';
            }
            return 'unknown';
        },
        $_isMobile() {
            return (this.$_detectOS === 'iOS' || this.$_detectOS === 'Android');
        },
    },
    methods: {

        $_formatTime(date) {
            const locale = this.$i18n.locale;
            let format = "YYYY年M月D日";
            if (locale == 'en') format = "DD MMM YYYY";
            return this.$dayjs(date).locale(locale).format(format);
        },
        $_mathClamp(num, min, max) {
            return num <= min ? min : num >= max ? max : num;
        },
        async $_addShareCount(id, category, type) {
            const params = {
                id,
                category,
                type,
            };

            try {
                const { data } = await this.$axios.post(
                    `site-setting/store-view-count`,
                    params,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            locale: this.$i18n.locale,
                        },
                    }
                );
            } catch (e) {
                console.log(e);
            }
        },
        $_getPosition(element) {
            let xPosition = 0;
            let yPosition = 0;
        
            while(element) {
                xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
                yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
                element = element.offsetParent;
            }
            return { x: xPosition, y: yPosition };
        },
    },
}

if (!Vue.__my_mixin__) {
    Vue.__my_mixin__ = true;
    Vue.mixin(vueCommon);
}
 