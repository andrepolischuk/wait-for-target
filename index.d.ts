export default function waitForTarget<T>(getTarget: () => T, timeout?: number): Promise<T>
