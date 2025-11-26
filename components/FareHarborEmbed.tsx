interface Props {
  embedUrl: string;
}

export default function FareHarborEmbed({ embedUrl }: Props) {
  return (
    <iframe src={embedUrl} width="100%" height="600" frameBorder="0" title="FareHarbor Booking Widget" />
  );
}