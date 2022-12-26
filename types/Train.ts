type Train = {
    TrainNoLocal: string,
    TrainName: string,
    StartStation: string,
    EndStation: string,
    Vehicles: [],
    ServerCode: string,
    TrainData: TrainData,
    id: string,
    Type: "bot" | "user";

}

type TrainData = {
    ControlledBySteamID: string | null
    InBorderStationArea: boolean,
    Latititute: number,
    Longitute: number,
    Velocity: bigint,
    SignalInFront: string,
    DistanceToSignalInFront: number,
    VDDelayedTimetableIndex: bigint,
}

export type {Train}