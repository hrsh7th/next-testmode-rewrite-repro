import { Suspense } from "react";
import { suspend } from "suspend-react";

export default function Index() {
  return (
    <div>
      <Suspense>
        <Pokemon name="pikachu" />
      </Suspense>
    </div>
  );
}

function Pokemon(props: { name: string }) {
  const pokemon = suspend(async () => {
    const response = await fetch(`http://localhost:3000/api/v2/pokemon/${props.name}`).then(res => res.json());
    return {
      name: response.name,
      stats: response.stats as {
        base_stat: number;
        effort: number;
        stat: {
          name: string;
          url: string;
        };
      }[],
      sprites: (response.sprites as Record<string, string>),
    };
  }, [props.name])
  return (
    <div>
      <div>{pokemon.name}</div>
      <ul>
        {Object.entries(pokemon.sprites).map(([name, url]) => (
          typeof url === "string" && (
            <li key={url}>
              <span>{name}</span><img src={url} />
            </li>
          )
        ))}
      </ul>
      <ul>
        {pokemon.stats.map(stat => (
          <li key={stat.stat.url}>
            <span>{stat.stat.name}</span> / <span>{stat.base_stat}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
