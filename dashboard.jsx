import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, FunnelChart, Funnel, LabelList } from 'recharts';
import { TrendingUp, Users, ShoppingCart, DollarSign, RefreshCw, Play, AlertCircle } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [abTestRunning, setAbTestRunning] = useState(false);
  const [abResults, setAbResults] = useState(null);
  const [dataRefreshing, setDataRefreshing] = useState(false);
  
  // Données simulées du pipeline
  const [pipelineData, setPipelineData] = useState({
    totalEvents: 2347845,
    totalUsers: 1407580,
    totalTransactions: 22457,
    conversionRate: 1.59,
    lastUpdated: new Date().toLocaleString('fr-FR')
  });

  // Données du funnel de conversion
  const funnelData = [
    { name: 'Vues', value: 1407580, fill: '#3b82f6' },
    { name: 'Ajouts panier', value: 69332, fill: '#8b5cf6' },
    { name: 'Transactions', value: 22457, fill: '#10b981' }
  ];

  // Articles les plus vendus
  const topProducts = [
    { id: '461686', name: 'Article 461686', sales: 891 },
    { id: '426794', name: 'Article 426794', sales: 742 },
    { id: '318965', name: 'Article 318965', sales: 658 },
    { id: '275806', name: 'Article 275806', sales: 623 },
    { id: '119736', name: 'Article 119736', sales: 594 }
  ];

  // Activité par heure
  const hourlyActivity = [
    { hour: '0h', events: 45230 },
    { hour: '1h', events: 38142 },
    { hour: '2h', events: 32458 },
    { hour: '3h', events: 28934 },
    { hour: '4h', events: 31245 },
    { hour: '5h', events: 42567 },
    { hour: '6h', events: 58923 },
    { hour: '7h', events: 76453 },
    { hour: '8h', events: 94532 },
    { hour: '9h', events: 112345 },
    { hour: '10h', events: 128456 },
    { hour: '11h', events: 145678 },
    { hour: '12h', events: 156789 },
    { hour: '13h', events: 162345 },
    { hour: '14h', events: 171234 },
    { hour: '15h', events: 175432 },
    { hour: '16h', events: 168234 },
    { hour: '17h', events: 159876 },
    { hour: '18h', events: 148765 },
    { hour: '19h', events: 132456 },
    { hour: '20h', events: 115678 },
    { hour: '21h', events: 98765 },
    { hour: '22h', events: 76543 },
    { hour: '23h', events: 58234 }
  ];

  // Activité par jour
  const dailyActivity = [
    { day: 'Lundi', events: 312456 },
    { day: 'Mardi', events: 345678 },
    { day: 'Mercredi', events: 378945 },
    { day: 'Jeudi', events: 389234 },
    { day: 'Vendredi', events: 412567 },
    { day: 'Samedi', events: 456789 },
    { day: 'Dimanche', events: 398234 }
  ];

  // Catégories principales
  const topCategories = [
    { name: 'Électronique', value: 8945, color: '#3b82f6' },
    { name: 'Mode', value: 6734, color: '#8b5cf6' },
    { name: 'Maison', value: 4523, color: '#10b981' },
    { name: 'Sport', value: 2255, color: '#f59e0b' },
    { name: 'Autres', value: 3567, color: '#6b7280' }
  ];

  // Simulation du pipeline de données
  const refreshPipeline = () => {
    setDataRefreshing(true);
    setTimeout(() => {
      setPipelineData({
        totalEvents: pipelineData.totalEvents + Math.floor(Math.random() * 10000),
        totalUsers: pipelineData.totalUsers + Math.floor(Math.random() * 1000),
        totalTransactions: pipelineData.totalTransactions + Math.floor(Math.random() * 100),
        conversionRate: (1.5 + Math.random() * 0.3).toFixed(2),
        lastUpdated: new Date().toLocaleString('fr-FR')
      });
      setDataRefreshing(false);
    }, 1500);
  };

  // Simulation d'A/B Test
  const runABTest = () => {
    setAbTestRunning(true);
    setAbResults(null);
    
    setTimeout(() => {
      // Simulation de résultats A/B test
      const groupA = {
        users: 50234,
        conversions: 798,
        conversionRate: 1.59,
        avgOrderValue: 45.67,
        revenue: 36443.66
      };
      
      const groupB = {
        users: 50187,
        conversions: 923,
        conversionRate: 1.84,
        avgOrderValue: 47.23,
        revenue: 43589.29
      };
      
      const improvement = ((groupB.conversionRate - groupA.conversionRate) / groupA.conversionRate * 100).toFixed(2);
      
      // Calcul du test statistique (simulé)
      const pValue = 0.0234; // Simulé
      const isSignificant = pValue < 0.05;
      
      setAbResults({
        groupA,
        groupB,
        improvement,
        pValue,
        isSignificant
      });
      setAbTestRunning(false);
    }, 3000);
  };

  const StatCard = ({ title, value, subtitle, icon: Icon, color }) => (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4" style={{ borderColor: color }}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold mt-2" style={{ color }}>{value}</p>
          {subtitle && <p className="text-gray-400 text-xs mt-1">{subtitle}</p>}
        </div>
        <Icon className="text-gray-300" size={40} />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Tableau de Bord E-Commerce</h1>
          <p className="text-gray-600">Pipeline automatisé et analyse en temps réel</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm text-gray-500">Dernière mise à jour: {pipelineData.lastUpdated}</span>
            <button
              onClick={refreshPipeline}
              disabled={dataRefreshing}
              className="ml-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition-colors disabled:bg-gray-400"
            >
              <RefreshCw size={16} className={dataRefreshing ? 'animate-spin' : ''} />
              {dataRefreshing ? 'Actualisation...' : 'Actualiser Pipeline'}
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-6">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'overview'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Vue d'ensemble
            </button>
            <button
              onClick={() => setActiveTab('funnel')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'funnel'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Funnel de Conversion
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'products'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Produits
            </button>
            <button
              onClick={() => setActiveTab('activity')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'activity'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Activité
            </button>
            <button
              onClick={() => setActiveTab('abtest')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'abtest'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              A/B Testing
            </button>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Événements Totaux"
                value={pipelineData.totalEvents.toLocaleString('fr-FR')}
                subtitle="Tous les événements capturés"
                icon={TrendingUp}
                color="#3b82f6"
              />
              <StatCard
                title="Utilisateurs Uniques"
                value={pipelineData.totalUsers.toLocaleString('fr-FR')}
                subtitle="Visiteurs distincts"
                icon={Users}
                color="#8b5cf6"
              />
              <StatCard
                title="Transactions"
                value={pipelineData.totalTransactions.toLocaleString('fr-FR')}
                subtitle="Achats finalisés"
                icon={ShoppingCart}
                color="#10b981"
              />
              <StatCard
                title="Taux de Conversion"
                value={`${pipelineData.conversionRate}%`}
                subtitle="Visiteurs → Acheteurs"
                icon={DollarSign}
                color="#f59e0b"
              />
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Catégories */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Répartition par Catégorie</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={topCategories}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {topCategories.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Pipeline Status */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">État du Pipeline</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="font-medium text-gray-700">Collecte de données</span>
                    <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">Actif</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="font-medium text-gray-700">Nettoyage automatique</span>
                    <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">Actif</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="font-medium text-gray-700">Agrégation metrics</span>
                    <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">Actif</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium text-gray-700">Analyse temps réel</span>
                    <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">En cours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Funnel Tab */}
        {activeTab === 'funnel' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-6 text-gray-800">Funnel de Conversion</h3>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {funnelData.map((stage, index) => {
                  const prevStage = index > 0 ? funnelData[index - 1] : null;
                  const dropoff = prevStage ? ((1 - stage.value / prevStage.value) * 100).toFixed(1) : 0;
                  
                  return (
                    <div key={stage.name} className="text-center">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg p-6 mb-3">
                        <div className="text-3xl font-bold mb-2">{stage.value.toLocaleString('fr-FR')}</div>
                        <div className="text-sm opacity-90">{stage.name}</div>
                      </div>
                      {prevStage && (
                        <div className="text-sm text-red-600 font-medium">
                          ↓ {dropoff}% abandon
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-8">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={funnelData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8b5cf6" radius={[8, 8, 0, 0]}>
                      {funnelData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {((funnelData[1].value / funnelData[0].value) * 100).toFixed(2)}%
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Vues → Panier</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {((funnelData[2].value / funnelData[1].value) * 100).toFixed(2)}%
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Panier → Achat</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {((funnelData[2].value / funnelData[0].value) * 100).toFixed(2)}%
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Taux global</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Top 5 Articles les Plus Vendus</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={topProducts} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={120} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="sales" fill="#10b981" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Détails des Produits</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID Produit</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ventes</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Part de marché</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tendance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {topProducts.map((product, index) => {
                      const totalSales = topProducts.reduce((sum, p) => sum + p.sales, 0);
                      const marketShare = ((product.sales / totalSales) * 100).toFixed(1);
                      
                      return (
                        <tr key={product.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {product.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {product.sales.toLocaleString('fr-FR')}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {marketShare}%
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              index < 2 ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                            }`}>
                              {index < 2 ? '↑ En hausse' : '→ Stable'}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Activity Tab */}
        {activeTab === 'activity' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Activité par Heure</h3>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={hourlyActivity}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hour" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="events" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Activité par Jour de la Semaine</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={dailyActivity}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="events" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg shadow-md p-6">
                <h4 className="text-sm font-medium opacity-90 mb-2">Heure la Plus Active</h4>
                <div className="text-3xl font-bold">15h</div>
                <div className="text-sm opacity-75 mt-1">175,432 événements</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg shadow-md p-6">
                <h4 className="text-sm font-medium opacity-90 mb-2">Jour le Plus Actif</h4>
                <div className="text-3xl font-bold">Samedi</div>
                <div className="text-sm opacity-75 mt-1">456,789 événements</div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg shadow-md p-6">
                <h4 className="text-sm font-medium opacity-90 mb-2">Moyenne Quotidienne</h4>
                <div className="text-3xl font-bold">384,843</div>
                <div className="text-sm opacity-75 mt-1">événements/jour</div>
              </div>
            </div>
          </div>
        )}

        {/* A/B Testing Tab */}
        {activeTab === 'abtest' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Simulation A/B Test</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Testez l'impact d'une nouvelle fonctionnalité sur le taux de conversion
                  </p>
                </div>
                <button
                  onClick={runABTest}
                  disabled={abTestRunning}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors disabled:bg-gray-400"
                >
                  <Play size={20} />
                  {abTestRunning ? 'Test en cours...' : 'Lancer le Test'}
                </button>
              </div>

              {abTestRunning && (
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                  <div className="flex items-center">
                    <RefreshCw className="animate-spin text-blue-500 mr-3" size={24} />
                    <div>
                      <p className="font-medium text-blue-900">Test A/B en cours...</p>
                      <p className="text-sm text-blue-700">Collecte et analyse des données des groupes A et B</p>
                    </div>
                  </div>
                </div>
              )}

              {abResults && !abTestRunning && (
                <div className="space-y-6">
                  {/* Résumé */}
                  <div className={`border-l-4 p-6 rounded-lg ${
                    abResults.isSignificant 
                      ? 'bg-green-50 border-green-500' 
                      : 'bg-yellow-50 border-yellow-500'
                  }`}>
                    <div className="flex items-start">
                      <AlertCircle className={`mr-3 ${
                        abResults.isSignificant ? 'text-green-500' : 'text-yellow-500'
                      }`} size={24} />
                      <div>
                        <h4 className={`font-bold text-lg ${
                          abResults.isSignificant ? 'text-green-900' : 'text-yellow-900'
                        }`}>
                          {abResults.isSignificant 
                            ? '✓ Résultats Statistiquement Significatifs' 
                            : '⚠ Résultats Non Significatifs'}
                        </h4>
                        <p className={`mt-1 ${
                          abResults.isSignificant ? 'text-green-700' : 'text-yellow-700'
                        }`}>
                          {abResults.isSignificant
                            ? `Le groupe B montre une amélioration de ${abResults.improvement}% (p-value: ${abResults.pValue})`
                            : `Différence observée de ${abResults.improvement}% mais non significative (p-value: ${abResults.pValue})`}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Comparaison des groupes */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Groupe A */}
                    <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
                      <h4 className="text-lg font-semibold text-blue-900 mb-4">Groupe A (Contrôle)</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Utilisateurs</span>
                          <span className="font-bold text-blue-900">{abResults.groupA.users.toLocaleString('fr-FR')}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Conversions</span>
                          <span className="font-bold text-blue-900">{abResults.groupA.conversions.toLocaleString('fr-FR')}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Taux de conversion</span>
                          <span className="font-bold text-blue-900">{abResults.groupA.conversionRate}%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Panier moyen</span>
                          <span className="font-bold text-blue-900">{abResults.groupA.avgOrderValue.toFixed(2)}€</span>
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t border-blue-300">
                          <span className="text-gray-700 font-medium">Revenu total</span>
                          <span className="font-bold text-blue-900">{abResults.groupA.revenue.toLocaleString('fr-FR')}€</span>
                        </div>
                      </div>
                    </div>

                    {/* Groupe B */}
                    <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-200">
                      <h4 className="text-lg font-semibold text-purple-900 mb-4">Groupe B (Variante)</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Utilisateurs</span>
                          <span className="font-bold text-purple-900">{abResults.groupB.users.toLocaleString('fr-FR')}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Conversions</span>
                          <span className="font-bold text-purple-900">{abResults.groupB.conversions.toLocaleString('fr-FR')}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Taux de conversion</span>
                          <span className="font-bold text-purple-900">
                            {abResults.groupB.conversionRate}%
                            <span className="ml-2 text-green-600 text-sm">↑ {abResults.improvement}%</span>
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Panier moyen</span>
                          <span className="font-bold text-purple-900">{abResults.groupB.avgOrderValue.toFixed(2)}€</span>
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t border-purple-300">
                          <span className="text-gray-700 font-medium">Revenu total</span>
                          <span className="font-bold text-purple-900">{abResults.groupB.revenue.toLocaleString('fr-FR')}€</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Graphique de comparaison */}
                  <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <h4 className="text-lg font-semibold mb-4 text-gray-800">Comparaison Visuelle</h4>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={[
                        { metric: 'Taux Conv.', A: abResults.groupA.conversionRate, B: abResults.groupB.conversionRate },
                        { metric: 'Panier Moyen', A: abResults.groupA.avgOrderValue, B: abResults.groupB.avgOrderValue }
                      ]}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="metric" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="A" fill="#3b82f6" name="Groupe A" radius={[8, 8, 0, 0]} />
                        <Bar dataKey="B" fill="#8b5cf6" name="Groupe B" radius={[8, 8, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Recommandation */}
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-2">💡 Recommandation</h4>
                    <p className="text-sm opacity-90">
                      {abResults.isSignificant
                        ? `Les résultats montrent une amélioration significative de ${abResults.improvement}%. Nous recommandons de déployer la variante B à l'ensemble des utilisateurs. Le gain de revenu estimé est de ${(abResults.groupB.revenue - abResults.groupA.revenue).toLocaleString('fr-FR')}€ pour cette période.`
                        : `Bien qu'une différence de ${abResults.improvement}% soit observée, les résultats ne sont pas statistiquement significatifs (p-value: ${abResults.pValue}). Nous recommandons de prolonger le test pour collecter plus de données.`}
                    </p>
                  </div>
                </div>
              )}

              {!abResults && !abTestRunning && (
                <div className="text-center py-12 text-gray-500">
                  <Play size={48} className="mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Cliquez sur "Lancer le Test" pour démarrer une simulation A/B</p>
                  <p className="text-sm mt-2">Le test comparera deux groupes d'utilisateurs sur le taux de conversion</p>
                </div>
              )}
            </div>

            {/* Documentation A/B Test */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-lg font-semibold mb-4 text-gray-800">À propos des Tests A/B</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">Méthodologie</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Division aléatoire 50/50 des utilisateurs</li>
                    <li>• Calcul du taux de conversion par groupe</li>
                    <li>• Test statistique (test z de proportions)</li>
                    <li>• Seuil de significativité : p-value &lt; 0.05</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">Métriques Analysées</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Taux de conversion global</li>
                    <li>• Valeur moyenne du panier</li>
                    <li>• Revenu total généré</li>
                    <li>• Amélioration relative (%)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;