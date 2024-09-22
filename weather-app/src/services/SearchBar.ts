// Interface for SearchBar component

export interface SearchBarInterface {
  searchCity: string;
  setSearchCity: (city: string) => void;
  handleSearch: () => void;
}