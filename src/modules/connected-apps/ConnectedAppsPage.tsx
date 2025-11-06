export function ConnectedAppsPage() {
  return (
    <div className="panel p-0 overflow-hidden">
      <div className="px-4 py-3 border-b border-kite-border">Connected apps</div>
      <div className="p-4">
        <input
          placeholder="Search apps"
          className="w-full bg-black/20 rounded px-3 py-2 mb-4"
        />
        <div className="text-center py-16">
          <div className="mb-4">
            <div className="inline-block relative">
              <div className="w-24 h-16 bg-gray-600 rounded border-2 border-dashed border-gray-500 relative">
                <div className="absolute top-1 left-1 flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-16 bg-gray-700 rounded rotate-12" />
            </div>
          </div>
          <div className="font-medium mb-2">No apps connected</div>
          <div className="text-blue-400 text-sm">Explore products</div>
        </div>
      </div>
    </div>
  );
}

