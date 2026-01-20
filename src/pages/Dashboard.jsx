import Layout from "../components/layout/Layout";

const Dashboard = () => {
  return (
    <Layout>
        <div className="space-y-6">
      <h1 className="text-2xl font-bold">
        Welcome to BugFixer Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white shadow p-4 rounded">
          Total Issues: 24
        </div>

        <div className="bg-white shadow p-4 rounded">
          Open Issues: 10
        </div>

        <div className="bg-white shadow p-4 rounded">
          Closed Issues: 14
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Dashboard;
