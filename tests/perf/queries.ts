export const queries = [
  // {
  //   description: 'test search',
  //   name: 'test-search',
  //   query: 'test',
  //   refinement: 'testing',
  // },
  {
    description: 'first author search',
    name: 'first-author',
    query: 'author:"^Solanki, Sami"',
    refinement: 'year:2003-2004',
  },
  {
    description: 'citations search',
    name: 'citations',
    query: 'citations(abs:"JWST")',
    refinement: 'property:refereed',
  },
  {
    description: 'year range search',
    name: 'year-range',
    query: 'year:2010-2020',
    refinement: 'bibstem:ApJ',
  },
  {
    description: 'title keyword search',
    name: 'title-keyword',
    query: 'title:"black hole"',
    refinement: 'author:"Hawking, S"',
  },
  {
    description: 'full text search',
    name: 'full-text',
    query: 'full:"gravitational waves"',
    refinement: 'year:2015-2023',
  },
  {
    description: 'affiliation search',
    name: 'affiliation',
    query: 'aff:"Harvard"',
    refinement: 'property:refereed',
  },
  {
    description: 'abstract keyword search',
    name: 'abstract-keyword',
    query: 'abs:"supernova"',
    refinement: 'year:2018-2023',
  },
  {
    description: 'bibliographic code search',
    name: 'bibcode-search',
    query: 'bibcode:2020ApJ...890...86S',
    refinement: 'property:refereed',
  },
  {
    description: 'publication type search',
    name: 'pub-type',
    query: 'property:refereed',
    refinement: 'year:2020-2023',
  },
  {
    description: 'keyword search',
    name: 'keyword-search',
    query: 'keyword:"exoplanet"',
    refinement: 'author:"Seager, S"',
  },
  {
    description: 'arxiv identifier search',
    name: 'arxiv-id',
    query: 'arxiv:hep-th/9108028',
    refinement: 'year:1988',
  },
  {
    description: 'OR condition search',
    name: 'or-search',
    query: 'author:"Einstein, A" OR author:"Newton, I"',
    refinement: 'year:1900-1950',
  },
  {
    description: 'AND condition search',
    name: 'and-search',
    query: 'author:"Einstein, A" AND year:1916',
    refinement: 'property:refereed',
  },
  {
    description: 'NOT condition search',
    name: 'not-search',
    query: 'title:"quantum" NOT title:"gravity"',
    refinement: 'year:2000-2023',
  },
  {
    description: 'journal search',
    name: 'journal-search',
    query: 'bibstem:ApJ',
    refinement: 'year:2010-2023',
  },
  {
    description: 'publication date exact',
    name: 'pub-date',
    query: 'pubdate:"2023-10-01"',
    refinement: 'property:refereed',
  },
  {
    description: 'papers cited by specific author',
    name: 'cited-by-author',
    query: 'citations(author:"Einstein, A")',
    refinement: 'year:1920-1955',
  },
  {
    description: 'title keyword with citations',
    name: 'title-citations',
    query: 'title:"black hole" citations(author:"^Hawking, S")',
    refinement: 'year:1970-2023',
  },
  {
    description: 'year range with citations from a specific journal',
    name: 'year-range-journal-citations',
    query: 'year:2010-2020 citations(bibstem:ApJ)',
    refinement: 'property:refereed',
  },
  {
    description: 'full text search with references',
    name: 'full-text-references',
    query: 'full:"gravitational waves" references(author:"Thorne, K")',
    refinement: 'year:1980-2023',
  },
  {
    description: 'publication type with citations in specific year',
    name: 'pub-type-citations-year',
    query: 'property:refereed citations(year:2019)',
    refinement: 'bibstem:ApJ',
  },
  {
    description: 'keyword search with cited references',
    name: 'keyword-cited-references',
    query: 'keyword:"dark matter" references(author:"Navarro, Julio F")',
    refinement: 'year:1990-2023',
  },
  {
    description: 'arxiv ID with citations search',
    name: 'arxiv-citations',
    query: 'citations(arxiv:hep-th/9108028)',
    refinement: 'year:1991-2023',
  },
  {
    description: 'multiple field search with nested citations',
    name: 'multi-field-nested-citations',
    query: 'author:"Feynman" title:"quantum" citations(bibstem:PhRvL)',
    refinement: 'year:1960-1988',
  },
  {
    description: 'author with citations in title and abstract',
    name: 'author-citations-title-abstract',
    query: 'author:"Sagan" citations(title:"life" abs:"extraterrestrial")',
    refinement: 'year:1970-1996',
  },
  {
    description: 'author OR title with citations in journal',
    name: 'author-or-title-citations-journal',
    query: '(author:"Einstein, A" OR title:"relativity") citations(bibstem:Natur)',
    refinement: 'year:1900-1955',
  },
];
