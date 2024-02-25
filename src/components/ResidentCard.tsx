interface ResidentCardProp{
    name: string,
    mass :  string,
    height : string,
    hair_color : string,
    gender : string,
    eye_color : string,
    skin_color : string
}

const ResidentCard = ({
  name,
  mass,
  height,
  hair_color,
  gender,
  eye_color,
  skin_color,
} : ResidentCardProp) => {
  return (
    <div className="glass flex flex-col glass p-2 h-full cursor-default">
      <div className="font-semibold text-white">{name}</div>
      <div className="text-sm text-gray-200 flex flex-wrap gap-1">
        <span>Height: {height}cm,</span>
        <span>Mass: {mass}kg,</span>
        <span>Hair color: {hair_color},</span>
        <span>Skin color: {skin_color},</span>
        <span>Eye color: {eye_color},</span>
        <span>Gender: {gender}</span>
      </div>
    </div>
  );
};

export default ResidentCard;
