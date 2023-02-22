import { Button } from "ui";
import { trpc } from '../utils/trpc';

export default function Web() {
  const hello = trpc.hello.useQuery({ text: 'client' });

  return (
    <div>
      <h1>Web</h1>
      <div>
        <p>{hello?.data?.greeting}</p>
      </div>
      <Button />
    </div>
  );
}
