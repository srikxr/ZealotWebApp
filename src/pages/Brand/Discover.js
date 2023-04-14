import { useState } from "react";
import Layout from "../../../components/Layout";

export default function Discover() {
  return (
    <>
      <Layout>
        <p className="text-gray-700 text-3xl mb-16 font-bold">Missions</p>

        <div className="grid lg:grid-cols-3 gap-5 mb-16">
          <div className="rounded bg-white h-40 shadow-sm"></div>
          <div className="rounded bg-white h-40 shadow-sm"></div>
          <div className="rounded bg-white h-40 shadow-sm"></div>
        </div>
        <div className="grid col-1 bg-white h-96 shadow-sm"></div>
      </Layout>
    </>
  );
}
