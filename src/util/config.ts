const config = {
  getCountryByRegion: (region: string) => `https://restcountries.com/v3.1/region/${region}`,
  questionTypes: ["capital", "flag"]
}

export default config