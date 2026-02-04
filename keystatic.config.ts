import { config, fields, collection, singleton } from '@keystatic/core';

const faqField = fields.array(
  fields.object({
    question: fields.text({ label: 'Question', validation: { isRequired: true } }),
    answer: fields.text({ label: 'Answer', multiline: true, validation: { isRequired: true } }),
  }),
  { label: 'FAQ Items', itemLabel: (props) => props.fields.question.value },
);

const featureField = fields.array(
  fields.object({
    title: fields.text({ label: 'Title', validation: { isRequired: true } }),
    description: fields.text({ label: 'Description', multiline: true, validation: { isRequired: true } }),
  }),
  { label: 'Features', itemLabel: (props) => props.fields.title.value },
);

const processStepField = fields.array(
  fields.object({
    title: fields.text({ label: 'Title', validation: { isRequired: true } }),
    description: fields.text({ label: 'Description', multiline: true, validation: { isRequired: true } }),
  }),
  { label: 'Process Steps', itemLabel: (props) => props.fields.title.value },
);

const painPointField = fields.array(
  fields.object({
    title: fields.text({ label: 'Title', validation: { isRequired: true } }),
    description: fields.text({ label: 'Description', multiline: true }),
  }),
  { label: 'Pain Points', itemLabel: (props) => props.fields.title.value },
);

const caseStudyRefField = fields.array(
  fields.object({
    title: fields.text({ label: 'Title', validation: { isRequired: true } }),
    description: fields.text({ label: 'Description', multiline: true, validation: { isRequired: true } }),
    href: fields.text({ label: 'Link' }),
  }),
  { label: 'Case Studies', itemLabel: (props) => props.fields.title.value },
);

const breadcrumbField = fields.array(
  fields.object({
    label: fields.text({ label: 'Label', validation: { isRequired: true } }),
    href: fields.text({ label: 'Href' }),
  }),
  { label: 'Breadcrumbs', itemLabel: (props) => props.fields.label.value },
);

export default config({
  storage: { kind: 'local' },
  collections: {
    solutions: collection({
      label: 'Solutions',
      slugField: 'slug',
      path: 'src/content/solutions/*/',
      format: { contentField: 'body' },
      schema: {
        slug: fields.text({ label: 'Slug', validation: { isRequired: true } }),
        title: fields.text({ label: 'Title', validation: { isRequired: true } }),
        shortTitle: fields.text({ label: 'Short Title', validation: { isRequired: true } }),
        description: fields.text({ label: 'Description', multiline: true, validation: { isRequired: true } }),
        icon: fields.text({ label: 'Icon Key', validation: { isRequired: true } }),
        sortOrder: fields.integer({ label: 'Sort Order', defaultValue: 0 }),

        // SEO
        metaTitle: fields.text({ label: 'Meta Title' }),
        metaDescription: fields.text({ label: 'Meta Description', multiline: true }),

        // Hero
        heroTitle: fields.text({ label: 'Hero Title', validation: { isRequired: true } }),
        heroDescription: fields.text({ label: 'Hero Description', multiline: true }),
        heroCtaText: fields.text({ label: 'Hero CTA Text' }),
        heroCtaHref: fields.text({ label: 'Hero CTA Href' }),
        heroShowBadge: fields.checkbox({ label: 'Show Badge', defaultValue: false }),

        // Breadcrumbs
        breadcrumbs: breadcrumbField,

        // Sections
        painPoints: painPointField,
        painPointsLabel: fields.text({ label: 'Pain Points Label' }),
        painPointsTitle: fields.text({ label: 'Pain Points Title' }),
        processSteps: processStepField,
        processStepsTitle: fields.text({ label: 'Process Steps Title' }),
        features: featureField,
        featureGridTitle: fields.text({ label: 'Feature Grid Title' }),
        featureGridLabel: fields.text({ label: 'Feature Grid Label' }),
        featureGridColumns: fields.integer({ label: 'Feature Grid Columns', defaultValue: 3 }),
        featureGridBackground: fields.select({
          label: 'Feature Grid Background',
          options: [
            { label: 'Default', value: 'default' },
            { label: 'Muted', value: 'muted' },
          ],
          defaultValue: 'muted',
        }),
        faqItems: faqField,
        faqTitle: fields.text({ label: 'FAQ Title' }),
        faqLabel: fields.text({ label: 'FAQ Label' }),

        // Testimonials filter
        testimonialFilterSolution: fields.text({ label: 'Testimonial Filter (Solution slug)' }),

        // CTA
        ctaTitle: fields.text({ label: 'CTA Title' }),
        ctaButtonText: fields.text({ label: 'CTA Button Text' }),

        // Schema markup
        schemaName: fields.text({ label: 'Schema Name' }),
        schemaDescription: fields.text({ label: 'Schema Description', multiline: true }),
        schemaUrl: fields.text({ label: 'Schema URL' }),

        // Body (Markdoc)
        body: fields.markdoc({ label: 'Body' }),
      },
    }),

    industries: collection({
      label: 'Industries',
      slugField: 'slug',
      path: 'src/content/industries/*/',
      format: { contentField: 'body' },
      schema: {
        slug: fields.text({ label: 'Slug', validation: { isRequired: true } }),
        title: fields.text({ label: 'Title', validation: { isRequired: true } }),
        shortTitle: fields.text({ label: 'Short Title', validation: { isRequired: true } }),
        description: fields.text({ label: 'Description', multiline: true, validation: { isRequired: true } }),
        icon: fields.text({ label: 'Icon Key', validation: { isRequired: true } }),
        sortOrder: fields.integer({ label: 'Sort Order', defaultValue: 0 }),

        // SEO
        metaTitle: fields.text({ label: 'Meta Title' }),
        metaDescription: fields.text({ label: 'Meta Description', multiline: true }),

        // Hero
        heroTitle: fields.text({ label: 'Hero Title', validation: { isRequired: true } }),
        heroDescription: fields.text({ label: 'Hero Description', multiline: true }),
        heroCtaText: fields.text({ label: 'Hero CTA Text' }),
        heroCtaHref: fields.text({ label: 'Hero CTA Href' }),

        // Breadcrumbs
        breadcrumbs: breadcrumbField,

        // Overview (optional parallax text section)
        overviewTitle: fields.text({ label: 'Overview Title' }),
        overviewDescription: fields.text({ label: 'Overview Description', multiline: true }),

        // Sections
        processSteps: processStepField,
        processStepsTitle: fields.text({ label: 'Process Steps Title' }),
        features: featureField,
        featureGridTitle: fields.text({ label: 'Feature Grid Title' }),
        featureGridLabel: fields.text({ label: 'Feature Grid Label' }),
        featureGridColumns: fields.integer({ label: 'Feature Grid Columns', defaultValue: 3 }),
        featureGridBackground: fields.select({
          label: 'Feature Grid Background',
          options: [
            { label: 'Default', value: 'default' },
            { label: 'Muted', value: 'muted' },
          ],
          defaultValue: 'default',
        }),

        // Additional features (e.g. ecommerce has CAPABILITIES)
        additionalFeatures: featureField,
        additionalFeaturesTitle: fields.text({ label: 'Additional Features Title' }),
        additionalFeaturesLabel: fields.text({ label: 'Additional Features Label' }),
        additionalFeaturesDescription: fields.text({ label: 'Additional Features Description', multiline: true }),
        additionalFeaturesColumns: fields.integer({ label: 'Additional Features Columns', defaultValue: 3 }),

        // Case studies (inline references)
        caseStudies: caseStudyRefField,
        caseStudiesTitle: fields.text({ label: 'Case Studies Title' }),

        faqItems: faqField,
        faqTitle: fields.text({ label: 'FAQ Title' }),
        faqLabel: fields.text({ label: 'FAQ Label' }),

        // Testimonials filter
        testimonialFilterIndustry: fields.text({ label: 'Testimonial Filter (Industry slug)' }),

        // CTA
        ctaTitle: fields.text({ label: 'CTA Title' }),
        ctaButtonText: fields.text({ label: 'CTA Button Text' }),

        // Whether this is a custom page (like ecommerce)
        isCustomPage: fields.checkbox({ label: 'Custom Page Layout', defaultValue: false }),

        // Body (Markdoc)
        body: fields.markdoc({ label: 'Body' }),
      },
    }),

    technologies: collection({
      label: 'Technologies',
      slugField: 'slug',
      path: 'src/content/technologies/*/',
      format: { contentField: 'body' },
      schema: {
        slug: fields.text({ label: 'Slug', validation: { isRequired: true } }),
        title: fields.text({ label: 'Title', validation: { isRequired: true } }),
        shortTitle: fields.text({ label: 'Short Title', validation: { isRequired: true } }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Build With', value: 'build-with' },
            { label: 'Platform', value: 'platform' },
            { label: 'Capability', value: 'capability' },
            { label: 'Migration', value: 'migration' },
          ],
          defaultValue: 'build-with',
        }),
        description: fields.text({ label: 'Description', multiline: true, validation: { isRequired: true } }),
        icon: fields.text({ label: 'Icon Key', validation: { isRequired: true } }),
        sortOrder: fields.integer({ label: 'Sort Order', defaultValue: 0 }),

        // SEO
        metaTitle: fields.text({ label: 'Meta Title' }),
        metaDescription: fields.text({ label: 'Meta Description', multiline: true }),

        // Hero
        heroTitle: fields.text({ label: 'Hero Title', validation: { isRequired: true } }),
        heroDescription: fields.text({ label: 'Hero Description', multiline: true }),
        heroCtaText: fields.text({ label: 'Hero CTA Text' }),
        heroCtaHref: fields.text({ label: 'Hero CTA Href' }),
        heroShowBadge: fields.checkbox({ label: 'Show Badge', defaultValue: false }),

        // Breadcrumbs
        breadcrumbs: breadcrumbField,

        // Sections
        painPoints: painPointField,
        painPointsLabel: fields.text({ label: 'Pain Points Label' }),
        painPointsTitle: fields.text({ label: 'Pain Points Title' }),
        processSteps: processStepField,
        processStepsTitle: fields.text({ label: 'Process Steps Title' }),
        features: featureField,
        featureGridTitle: fields.text({ label: 'Feature Grid Title' }),
        featureGridLabel: fields.text({ label: 'Feature Grid Label' }),
        featureGridColumns: fields.integer({ label: 'Feature Grid Columns', defaultValue: 3 }),
        featureGridBackground: fields.select({
          label: 'Feature Grid Background',
          options: [
            { label: 'Default', value: 'default' },
            { label: 'Muted', value: 'muted' },
          ],
          defaultValue: 'muted',
        }),
        faqItems: faqField,
        faqTitle: fields.text({ label: 'FAQ Title' }),
        faqLabel: fields.text({ label: 'FAQ Label' }),

        // CTA
        ctaTitle: fields.text({ label: 'CTA Title' }),
        ctaButtonText: fields.text({ label: 'CTA Button Text' }),

        // Schema markup
        schemaName: fields.text({ label: 'Schema Name' }),
        schemaDescription: fields.text({ label: 'Schema Description', multiline: true }),
        schemaUrl: fields.text({ label: 'Schema URL' }),

        // Body (Markdoc)
        body: fields.markdoc({ label: 'Body' }),
      },
    }),

    locations: collection({
      label: 'Locations',
      slugField: 'slug',
      path: 'src/content/locations/*/',
      format: { contentField: 'body' },
      schema: {
        slug: fields.text({ label: 'Slug', validation: { isRequired: true } }),
        title: fields.text({ label: 'Title', validation: { isRequired: true } }),
        city: fields.text({ label: 'City', validation: { isRequired: true } }),
        state: fields.text({ label: 'State', validation: { isRequired: true } }),
        stateAbbr: fields.text({ label: 'State Abbreviation', validation: { isRequired: true } }),
        sortOrder: fields.integer({ label: 'Sort Order', defaultValue: 0 }),

        // SEO
        metaTitle: fields.text({ label: 'Meta Title' }),
        metaDescription: fields.text({ label: 'Meta Description', multiline: true }),

        // Hero
        heroTitle: fields.text({ label: 'Hero Title', validation: { isRequired: true } }),
        heroDescription: fields.text({ label: 'Hero Description', multiline: true }),
        heroCtaText: fields.text({ label: 'Hero CTA Text' }),
        heroCtaHref: fields.text({ label: 'Hero CTA Href' }),
        heroSecondaryText: fields.text({ label: 'Hero Secondary Text' }),
        heroSecondaryHref: fields.text({ label: 'Hero Secondary Href' }),

        // Breadcrumbs
        breadcrumbs: breadcrumbField,

        // Overview section
        overviewTitle: fields.text({ label: 'Overview Title' }),
        overviewDescription: fields.text({ label: 'Overview Description', multiline: true }),

        // Solutions grid config
        solutionsGridTitle: fields.text({ label: 'Solutions Grid Title' }),
        solutionsGridDescription: fields.text({ label: 'Solutions Grid Description' }),

        faqItems: faqField,
        faqTitle: fields.text({ label: 'FAQ Title' }),
        faqLabel: fields.text({ label: 'FAQ Label' }),

        // CTA
        ctaTitle: fields.text({ label: 'CTA Title' }),
        ctaButtonText: fields.text({ label: 'CTA Button Text' }),

        // Body (Markdoc)
        body: fields.markdoc({ label: 'Body' }),
      },
    }),

    testimonials: collection({
      label: 'Testimonials',
      slugField: 'slug',
      path: 'src/content/testimonials/*',
      format: 'yaml',
      schema: {
        slug: fields.text({ label: 'Slug', validation: { isRequired: true } }),
        quote: fields.text({ label: 'Quote', multiline: true, validation: { isRequired: true } }),
        author: fields.text({ label: 'Author', validation: { isRequired: true } }),
        role: fields.text({ label: 'Role', validation: { isRequired: true } }),
        logo: fields.text({ label: 'Logo Path' }),
        image: fields.text({ label: 'Image Path' }),
        industries: fields.array(
          fields.text({ label: 'Industry slug' }),
          { label: 'Industries' },
        ),
        solutions: fields.array(
          fields.text({ label: 'Solution slug' }),
          { label: 'Solutions' },
        ),
        sortOrder: fields.integer({ label: 'Sort Order', defaultValue: 0 }),
      },
    }),

    'case-studies': collection({
      label: 'Case Studies',
      slugField: 'slug',
      path: 'src/content/case-studies/*',
      format: 'yaml',
      schema: {
        slug: fields.text({ label: 'Slug', validation: { isRequired: true } }),
        title: fields.text({ label: 'Title', validation: { isRequired: true } }),
        category: fields.text({ label: 'Category', validation: { isRequired: true } }),
        description: fields.text({ label: 'Description', multiline: true, validation: { isRequired: true } }),
        shortDescription: fields.text({ label: 'Short Description', multiline: true }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          { label: 'Tags' },
        ),
        image: fields.text({ label: 'Image Path', validation: { isRequired: true } }),
        href: fields.text({ label: 'Link' }),
        sortOrder: fields.integer({ label: 'Sort Order', defaultValue: 0 }),
      },
    }),
  },
  singletons: {
    navigation: singleton({
      label: 'Navigation',
      path: 'src/content/navigation',
      format: 'yaml',
      schema: {
        items: fields.array(
          fields.object({
            label: fields.text({ label: 'Label', validation: { isRequired: true } }),
            href: fields.text({ label: 'Href' }),
            children: fields.array(
              fields.object({
                label: fields.text({ label: 'Label', validation: { isRequired: true } }),
                href: fields.text({ label: 'Href', validation: { isRequired: true } }),
                description: fields.text({ label: 'Description' }),
                featured: fields.checkbox({ label: 'Featured', defaultValue: false }),
              }),
              { label: 'Dropdown Items', itemLabel: (props) => props.fields.label.value },
            ),
          }),
          { label: 'Nav Items', itemLabel: (props) => props.fields.label.value },
        ),
      },
    }),

    footer: singleton({
      label: 'Footer',
      path: 'src/content/footer',
      format: 'yaml',
      schema: {
        solutions: fields.array(
          fields.object({
            label: fields.text({ label: 'Label', validation: { isRequired: true } }),
            href: fields.text({ label: 'Href', validation: { isRequired: true } }),
          }),
          { label: 'Solutions Links', itemLabel: (props) => props.fields.label.value },
        ),
        company: fields.array(
          fields.object({
            label: fields.text({ label: 'Label', validation: { isRequired: true } }),
            href: fields.text({ label: 'Href', validation: { isRequired: true } }),
          }),
          { label: 'Company Links', itemLabel: (props) => props.fields.label.value },
        ),
        legal: fields.array(
          fields.object({
            label: fields.text({ label: 'Label', validation: { isRequired: true } }),
            href: fields.text({ label: 'Href', validation: { isRequired: true } }),
          }),
          { label: 'Legal Links', itemLabel: (props) => props.fields.label.value },
        ),
        socialLinks: fields.array(
          fields.object({
            name: fields.text({ label: 'Name', validation: { isRequired: true } }),
            href: fields.text({ label: 'Href', validation: { isRequired: true } }),
            icon: fields.text({ label: 'Icon Key', validation: { isRequired: true } }),
          }),
          { label: 'Social Links', itemLabel: (props) => props.fields.name.value },
        ),
      },
    }),

    services: singleton({
      label: 'Services',
      path: 'src/content/services',
      format: 'yaml',
      schema: {
        items: fields.array(
          fields.object({
            id: fields.text({ label: 'ID', validation: { isRequired: true } }),
            title: fields.text({ label: 'Title', validation: { isRequired: true } }),
            description: fields.text({ label: 'Description', multiline: true, validation: { isRequired: true } }),
            icon: fields.text({ label: 'Icon Key', validation: { isRequired: true } }),
          }),
          { label: 'Service Items', itemLabel: (props) => props.fields.title.value },
        ),
      },
    }),

    'client-logos': singleton({
      label: 'Client Logos',
      path: 'src/content/client-logos',
      format: 'yaml',
      schema: {
        items: fields.array(
          fields.object({
            name: fields.text({ label: 'Name', validation: { isRequired: true } }),
            src: fields.text({ label: 'Image Source', validation: { isRequired: true } }),
            alt: fields.text({ label: 'Alt Text', validation: { isRequired: true } }),
          }),
          { label: 'Logo Items', itemLabel: (props) => props.fields.name.value },
        ),
      },
    }),

    comparison: singleton({
      label: 'Comparison Table',
      path: 'src/content/comparison',
      format: 'yaml',
      schema: {
        headers: fields.array(
          fields.text({ label: 'Header' }),
          { label: 'Headers' },
        ),
        rows: fields.array(
          fields.object({
            feature: fields.text({ label: 'Feature', validation: { isRequired: true } }),
            staffAug: fields.select({
              label: 'Staff Aug',
              options: [
                { label: 'Yes', value: 'true' },
                { label: 'No', value: 'false' },
                { label: 'Partial', value: 'partial' },
              ],
              defaultValue: 'false',
            }),
            fetchly: fields.select({
              label: 'Fetchly',
              options: [
                { label: 'Yes', value: 'true' },
                { label: 'No', value: 'false' },
                { label: 'Partial', value: 'partial' },
              ],
              defaultValue: 'true',
            }),
            agency: fields.select({
              label: 'Agency',
              options: [
                { label: 'Yes', value: 'true' },
                { label: 'No', value: 'false' },
                { label: 'Partial', value: 'partial' },
              ],
              defaultValue: 'true',
            }),
          }),
          { label: 'Comparison Rows', itemLabel: (props) => props.fields.feature.value },
        ),
      },
    }),

    // ── Page singletons ──────────────────────────────────────────────────

    homepage: singleton({
      label: 'Homepage',
      path: 'src/content/homepage',
      format: 'yaml',
      schema: {
        heroTitle: fields.text({ label: 'Hero Title', validation: { isRequired: true } }),
        heroSubtitle: fields.text({ label: 'Hero Subtitle' }),
        heroCtaText: fields.text({ label: 'Hero CTA Text' }),
        bentoIntro: fields.text({ label: 'Bento Intro', multiline: true }),
        processStepsTitle: fields.text({ label: 'Process Steps Title' }),
        processSteps: processStepField,
        featuredCaseStudyTitle: fields.text({ label: 'Featured Case Study Title' }),
        featuredCaseStudyDescription: fields.text({ label: 'Featured Case Study Description', multiline: true }),
        featuredCaseStudyLogoSrc: fields.text({ label: 'Featured Case Study Logo' }),
        featuredCaseStudyCtaText: fields.text({ label: 'Featured Case Study CTA Text' }),
        featuredCaseStudyCtaHref: fields.text({ label: 'Featured Case Study CTA Href' }),
        featuredCaseStudyLabel: fields.text({ label: 'Featured Case Study Label' }),
        faqTitle: fields.text({ label: 'FAQ Title' }),
        faqLabel: fields.text({ label: 'FAQ Label' }),
        faqItems: faqField,
        locationsTitle: fields.text({ label: 'Locations Title' }),
        ctaTitle: fields.text({ label: 'CTA Title' }),
        ctaButtonText: fields.text({ label: 'CTA Button Text' }),
      },
    }),

    'services-page': singleton({
      label: 'Services Page',
      path: 'src/content/services-page',
      format: 'yaml',
      schema: {
        heroTitle: fields.text({ label: 'Hero Title', validation: { isRequired: true } }),
        heroDescription: fields.text({ label: 'Hero Description', multiline: true }),
        heroCtaText: fields.text({ label: 'Hero CTA Text' }),
        heroCtaHref: fields.text({ label: 'Hero CTA Href' }),
        heroSecondaryText: fields.text({ label: 'Hero Secondary Text' }),
        heroSecondaryHref: fields.text({ label: 'Hero Secondary Href' }),
        solutionsGridTitle: fields.text({ label: 'Solutions Grid Title' }),
        solutionsGridDescription: fields.text({ label: 'Solutions Grid Description' }),
        faqTitle: fields.text({ label: 'FAQ Title' }),
        faqLabel: fields.text({ label: 'FAQ Label' }),
        faqItems: faqField,
        ctaTitle: fields.text({ label: 'CTA Title' }),
        ctaButtonText: fields.text({ label: 'CTA Button Text' }),
      },
    }),

    'our-model-page': singleton({
      label: 'Our Model Page',
      path: 'src/content/our-model-page',
      format: 'yaml',
      schema: {
        heroTitle: fields.text({ label: 'Hero Title', validation: { isRequired: true } }),
        heroSubtitle: fields.text({ label: 'Hero Subtitle' }),
        heroDescription: fields.text({ label: 'Hero Description', multiline: true }),
        heroCtaText: fields.text({ label: 'Hero CTA Text' }),
        heroCtaHref: fields.text({ label: 'Hero CTA Href' }),
        heroSecondaryText: fields.text({ label: 'Hero Secondary Text' }),
        heroSecondaryHref: fields.text({ label: 'Hero Secondary Href' }),
        heroImage: fields.text({ label: 'Hero Image' }),
        heroImageAlt: fields.text({ label: 'Hero Image Alt' }),
        iconGridTitle: fields.text({ label: 'Icon Grid Title' }),
        iconGridDescription: fields.text({ label: 'Icon Grid Description', multiline: true }),
        processStepsTitle: fields.text({ label: 'Process Steps Title' }),
        processSteps: processStepField,
        faqTitle: fields.text({ label: 'FAQ Title' }),
        faqLabel: fields.text({ label: 'FAQ Label' }),
        faqItems: faqField,
      },
    }),

    'industries-page': singleton({
      label: 'Industries Page',
      path: 'src/content/industries-page',
      format: 'yaml',
      schema: {
        heroTitle: fields.text({ label: 'Hero Title', validation: { isRequired: true } }),
        heroDescription: fields.text({ label: 'Hero Description', multiline: true }),
        industryGridTitle: fields.text({ label: 'Industry Grid Title' }),
        industryGridDescription: fields.text({ label: 'Industry Grid Description', multiline: true }),
        ctaTitle: fields.text({ label: 'CTA Title' }),
        ctaDescription: fields.text({ label: 'CTA Description', multiline: true }),
        ctaButtonText: fields.text({ label: 'CTA Button Text' }),
      },
    }),

    'solutions-page': singleton({
      label: 'Solutions Page',
      path: 'src/content/solutions-page',
      format: 'yaml',
      schema: {
        heroTitle: fields.text({ label: 'Hero Title', validation: { isRequired: true } }),
        heroDescription: fields.text({ label: 'Hero Description', multiline: true }),
        solutionsGridTitle: fields.text({ label: 'Solutions Grid Title' }),
        solutionsGridDescription: fields.text({ label: 'Solutions Grid Description', multiline: true }),
        ctaTitle: fields.text({ label: 'CTA Title' }),
        ctaDescription: fields.text({ label: 'CTA Description', multiline: true }),
        ctaButtonText: fields.text({ label: 'CTA Button Text' }),
      },
    }),

    'technologies-page': singleton({
      label: 'Technologies Page',
      path: 'src/content/technologies-page',
      format: 'yaml',
      schema: {
        heroTitle: fields.text({ label: 'Hero Title', validation: { isRequired: true } }),
        heroDescription: fields.text({ label: 'Hero Description', multiline: true }),
        categories: fields.array(
          fields.object({
            key: fields.text({ label: 'Key', validation: { isRequired: true } }),
            title: fields.text({ label: 'Title', validation: { isRequired: true } }),
            description: fields.text({ label: 'Description', multiline: true }),
          }),
          { label: 'Categories', itemLabel: (props) => props.fields.title.value },
        ),
        ctaTitle: fields.text({ label: 'CTA Title' }),
        ctaDescription: fields.text({ label: 'CTA Description', multiline: true }),
        ctaButtonText: fields.text({ label: 'CTA Button Text' }),
      },
    }),

    'case-studies-page': singleton({
      label: 'Case Studies Page',
      path: 'src/content/case-studies-page',
      format: 'yaml',
      schema: {
        heroTitle: fields.text({ label: 'Hero Title', validation: { isRequired: true } }),
        heroDescription: fields.text({ label: 'Hero Description', multiline: true }),
        ctaTitle: fields.text({ label: 'CTA Title' }),
        ctaDescription: fields.text({ label: 'CTA Description', multiline: true }),
        ctaButtonText: fields.text({ label: 'CTA Button Text' }),
        ctaSecondaryText: fields.text({ label: 'CTA Secondary Text' }),
        ctaSecondaryHref: fields.text({ label: 'CTA Secondary Href' }),
      },
    }),
  },
});
