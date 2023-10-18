<script>
  import { page } from "$app/stores";

    /**
   * @type {any}
   */
     export let title 
    /**
   * @type {any}
   */
     export let description
    /**
   * @type {any}
   */
     export let type 

    $: url = $page.url.href

</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description"  content={description}/>
   {@html `<script type="application/ld+json">
    {
  "@context": "http://schema.org",
  "@type": "${type}",
  "name": "${title}",
 "description": "${description}",
  "url": "${url}",
  "logo": "https://www.banter.id/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "0247613372",
    "contactType": "customer service"
    "contactOption": "WhatsApp",
    "areaServed": "ID",
    "availableLanguage": "Indonesian",
    "url": "https://wa.me/087782886494"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Candi Kalasan Timur 7a no. 4, Semarang",
    "addressLocality": "Semarang",
    "postalCode": "50147",
    "addressCountry": "Indonesia"
  },
  "sameAs": [
    "https://www.tiktok.com/@banterinaja",
    "https://www.facebook.com/banter",
    "https://www.instagram.com/banterinaja/"
  ]
}
    </script> `}
</svelte:head>