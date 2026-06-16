import { getCountries } from '@/app/_lib/data-service';

async function SelectCountry({ defaultCountry, name, id, className }) {
  const countries = await getCountries();
  console.log(countries.length);
  
  const flag =
    countries.find(
      (country) => country.names?.common === defaultCountry
    )?.flag?.url_svg ?? '';

  return (
    <select
      name={name}
      id={id}
      defaultValue={`${defaultCountry}%${flag}`}
      className={className}
    >
      <option value="">Select country...</option>

      {countries.map((c) => (
        <option
          key={c.codes?.alpha_3}
          value={`${c.names?.common}%${c.flag?.url_svg}`}
        >
          {c.names?.common}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;